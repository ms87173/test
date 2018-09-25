import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, of } from 'rxjs';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Section } from '../models/section';
import { Question } from '../models/question';
import { FormGroup } from '@angular/forms';
import { FormlyLifeCycleOptions } from '@ngx-formly/core/lib/components/formly.field.config';
import { QuestionaireDeltaResponse } from '../models/questionaire-delta-response';
import * as _ from 'lodash';
import { Store } from '@ngrx/store';
import { fromRootReducers } from '../../store';
import { Task, FormlyFieldConfigArrayCollection, Answer } from '../models';
import { debounceTime } from 'rxjs/operators';
import { CustomComponentsEnum, EXISTING_COMPONENTS, EXISTING_SIMPLE_COMPONENTS } from '../../custom-formly-fields/enums/custom-components.enum';
import { emailFieldArray } from '../../custom-formly-fields/formly-configs/email-field-array';
import { FormlyFieldsService } from './formly-fields.service';
import { PhoneFieldConfig } from '../../custom-formly-fields/formly-configs/phone-field.config';
import { AddressFieldsFieldArray } from '../../custom-formly-fields/formly-configs/address-fields-field-array';
import { documentFieldArray } from '../../custom-formly-fields/formly-configs/document-field-array';
import { DynamicOptionsService } from './dynamic-options.service';
import { CustomTestFieldArray } from '../../custom-formly-fields/formly-configs/custom-test-field-array';
import { TASK_TYPES } from '../constants/application-request.constants';

@Injectable()
export class NgxFormlyParserService {
  public currentQuestionId: string = null;
  public fieldChangeObj = null;
  getFormlyFieldConfigArrayCollectionFromTask(currentTask: Task, currentQuestionId: string,
    requestId: string, workflowId: string, taskId: string,
    taskType: string = TASK_TYPES.QUESTION): Observable<FormlyFieldConfigArrayCollection[]> {
    const formlyFieldConfigArrayCollections: FormlyFieldConfigArrayCollection[] = [];
    const currTask = { ...currentTask };
    currTask.sections.map((section: Section) => {
      const FormlyFieldConfigArray: FormlyFieldConfig[] =
        this.getFormlyFieldConfigArrayFromSection(section, currentQuestionId, requestId, workflowId, taskId, taskType
        );
      const formlyFieldConfigArray: FormlyFieldConfigArrayCollection =
        new FormlyFieldConfigArrayCollection(FormlyFieldConfigArray, section.title);
      formlyFieldConfigArrayCollections.push(formlyFieldConfigArray);
    });
    return of(formlyFieldConfigArrayCollections);
  }

  getFormlyFieldConfigArrayFromSection(currentSection: Section, currentQuestionId: string,
    requestId: string, workflowId: string, taskId: string, taskType: string = TASK_TYPES.QUESTION): FormlyFieldConfig[] {
    const FormlyFieldConfigArray: FormlyFieldConfig[] = [];
    const currSection = { ...currentSection };
    currSection.questions.map((question: Question) => {
      if (EXISTING_COMPONENTS.includes(question.type)) {
        let field: any = {};
        field.key = question.id.toString();
        if (question.answers && question.answers.length > 0) {
          field.answers = question.answers;
        }
        else {
          field.answers = [];
        }
        field.recurrent = question.recurrent || false;
        if (EXISTING_SIMPLE_COMPONENTS.includes(question.type) && !field.recurrent) {
          field.type = question.type;
          if (field.key == currentQuestionId) {
            field.focus = true;
          }
          field.lookupName = question.lookUpname;
          field.lifecycle = this.formlyFieldsService
            .getFormlyLifeCycleEventByQuestionType(field.type, requestId, workflowId, taskId, taskType);
          field.templateOptions = {
            label: question.label || '',
            options: question.options || [],
            required: question.required || false,
            disabled: question.disabled || false,
            // recurrent: question.recurrent || false
          };

          // Todo Need to change this
          // field.validation = {
          //   show: false
          // };
          if (question.max) {
            field.templateOptions.max = question.max;
          }
          if (question.maxLength) {
            field.templateOptions.maxLength = question.maxLength;
          }
          if (question.min) {
            field.templateOptions.min = question.min;
          }
          if (question.minLength) {
            field.templateOptions.minLength = question.minLength;
          }
          field = this.getFormlyFieldArrayConfigByQuestionType(field);
        } else if (EXISTING_SIMPLE_COMPONENTS.includes(question.type) && field.recurrent) {
          field.type = CustomComponentsEnum.CUSTOM_RECURRENT_WRAPPER;
          field.subType = question.type;
          field.fieldArray = {

            fieldGroup: [
              {
                key: question.id.toString(),
                // className: 'col-md-9',

                type: question.type,
                templateOptions: {
                  label: question.label || '',
                  options: question.options || [],
                  required: question.required || false,
                  disabled: question.disabled || false,
                  // recurrent: question.recurrent || false
                },
                lookupName: question.lookUpname,
                lifecycle: null
              }
            ]
          };


        }
        // Todo : Add Else for Compound types
        // else {

        // }

        FormlyFieldConfigArray.push(field);
      }
    });
    return FormlyFieldConfigArray;
  }

  getFormlyFieldArrayConfigByQuestionType(formlyField: any): any {

    const field = { ...formlyField };

    switch (field.type) {
      case CustomComponentsEnum.CUSTOM_TEST:
        field.fieldArray = { ...CustomTestFieldArray };
        break;

      case CustomComponentsEnum.CUSTOM_EMAIL:
        field.fieldArray = { ...emailFieldArray };
        break;
      case CustomComponentsEnum.CUSTOM_PHONE:
        field.fieldArray = PhoneFieldConfig.fieldArray;
        break;
      case CustomComponentsEnum.CUSTOM_ADDRESS_FIELDS:
        field.fieldArray = { ...AddressFieldsFieldArray };
        const addressCountryField = { ...field.fieldArray.fieldGroup[7] };
        addressCountryField.templateOptions.options = this.dynamicOptionsService
          .getDynamicOptions('country');
        field.fieldArray.fieldGroup[7] = { ...addressCountryField };
        break;

      case CustomComponentsEnum.CUSTOM_DOCUMENT_UPLOAD:
        field.fieldArray = {
          ...documentFieldArray
        };
        break;
      case CustomComponentsEnum.CUSTOM_DYNAMIC_DROP:
        // if (field.lookupName) {
        field.templateOptions.options = this.dynamicOptionsService
          .getDynamicOptions(field.lookupName);
        // }
        break;
    }
    return field;

  }

  setDefaultValuesFromAnswers(answers: Answer[], field: FormlyFieldConfig, isRecurrent: boolean): FormlyFieldConfig {
    const currField: FormlyFieldConfig = { ...field };
    if (!isRecurrent) {
      currField.defaultValue = answers[0].value;
    } else {
      currField.defaultValue = answers;
    }
    return currField;
  }

  constructor(
    private formlyFieldsService: FormlyFieldsService,
    private dynamicOptionsService: DynamicOptionsService
  ) { }
}
