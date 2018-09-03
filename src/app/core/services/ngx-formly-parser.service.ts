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
import { Task, FormlyFieldConfigArrayCollection } from '../models';
import { debounceTime } from 'rxjs/operators';
import { CustomComponentsEnum } from '../../custom-formly-fields/enums/custom-components.enum';
import { emailFieldArray } from '../../custom-formly-fields/formly-configs/email-field-array';
import { FormlyFieldsService } from './formly-fields.service';
import { PhoneFieldConfig } from '../../custom-formly-fields/formly-configs/phone-field.config';

@Injectable()
export class NgxFormlyParserService {
  /// Todo: Waiting for client Store module. 
  /// this should be handled in a property from state
  public currentQuestionId: string = null;
  public fieldChangeObj = null;

  // private fieldChangeLifecycleTrigger: FormlyLifeCycleOptions = 
  // {
  //   onInit: (form?: FormGroup, field?: FormlyFieldConfig, model?: any, options?: FormlyFormOptions) => {
  //     let key = field.key;
  //     let formObj = form.get(key);

  //     formObj.valueChanges
  //       .pipe(debounceTime(600))
  //       //Todo: To be Decided
  //       .subscribe((fieldValue) => {
  //         console.log("field changes occured")
  //         console.log(fieldValue);
  //         console.log(field.defaultValue);
  //         // this.currentQuestionId = key;
  //         // let questionaireRequest: QuestionaireDeltaRequest = {
  //         //   id: key,
  //         //   value: fieldValue
  //         // };
  //         // this.store.dispatch(new questionnaireActions.DeleteQuestionnaireErrorByQuestionId(this.currentQuestionId));
  //         // this.store.dispatch(new questionnaireActions.GetCurrentFieldChangeDelta(questionaireRequest));
  //       });
  //   }
  // }
  // getfieldChange() {
  //   return of(this.fieldChangeObj);
  // }

  // getFormlyFieldConfigFromTask(currentTask: Task, currentQuestionId: string): Observable<FormlyFieldConfig[]> {
  //   let currentConfig: FormlyFieldConfig = {
  //   };

  //   currentTask.sections.map((section: Section) => {
  //     // currentConfig.key = section.id;
  //     currentConfig.wrappers = ['form-group'];
  //     currentConfig.templateOptions = {
  //       label: section.title
  //     };
  //     let fieldGroup: FormlyFieldConfig[] = [];
  //     section.questions.map((question: Question) => {
  //       let field: FormlyFieldConfig = {};
  //       if (question.id == currentQuestionId) {

  //         field.focus = true;
  //       }

  //       field.key = question.id;
  //       field.type = question.type;
  //       field.lifecycle = this.fieldChangeLifecycleTrigger;

  //       field.templateOptions = {
  //         label: question.label,
  //         options: question.options,
  //         required: question.required,
  //       };

  //       if (question.serverErrorMessage) {
  //         field.validators = {
  //           ip: {
  //             expression: (c) => true,
  //             message: (error, field: FormlyFieldConfig) => question.serverErrorMessage,
  //           }
  //         }
  //       }
  //       ////Todo:Find Immutable way
  //       fieldGroup.push(field);
  //     });
  //     currentConfig.fieldGroup = fieldGroup;
  //   });
  //   return of([currentConfig]);
  // }

  // ///Todo: Change it to call delta from  server

  // mergeFieldChangeDeltaAndCurrentcurrentTask(currentTask: Task, delta: QuestionaireDeltaResponse, model: any): Observable<Task> {

  //   let currTask = { ...currentTask };
  //   if (delta) {

  //     if (delta.delete) {
  //       let modelProperties = _.keys(model);

  //       delta.delete.forEach((question) => {
  //         let currentSection = currTask.sections.find((section) => {
  //           return section.title == question.sectionName;
  //         });

  //         currentSection.questions = currentSection.questions
  //           .filter((questionItem) => {
  //             return questionItem.id !== question.id
  //           });

  //         if (modelProperties.find((modelproperty) => { return modelproperty == question.id; })) {
  //           delete model[question.id];
  //         }
  //       });
  //     }

  //     ////Todo: Update Loop for delta

  //     if (delta.new) {
  //       delta.new.forEach((question) => {
  //         let currentSection = currTask.sections.find((section) => {
  //           return section.title === question.sectionName;
  //         });
  //         let currentQuestionIndex = currentSection.questions.findIndex((questioItem) => {
  //           return questioItem.id == question.questionIdAfterToBeInserted;
  //         });

  //         let newQuestion: Question = {
  //           id: question.id,
  //           defaultValue: question.defaultValue,
  //           label: question.label,
  //           options: question.options,
  //           placeHolder: question.placeHolder,
  //           readOnly: question.readOnly,
  //           required: question.required,
  //           tooltipText: question.tooltipText,
  //           type: question.type
  //         }
  //         if (currentSection.questions.findIndex((questioItem) => { return questioItem.id == question.id }) == -1)
  //           currentSection.questions.splice(currentQuestionIndex + 1, 0, newQuestion);
  //       });
  //     }

  //     ////Todo:Error loop for delta

  //     if (delta.errors) {
  //       delta.errors.forEach((error) => {
  //         let currentSection = currTask.sections.find((section) => {
  //           return section.title === error.sectionName;
  //         });
  //         let currentQuestion = currentSection.questions.find((questionItem) => {
  //           return questionItem.id == error.id;
  //         });
  //         currentQuestion.serverErrorMessage = error.errorMessage;
  //       });
  //     }
  //   }
  //   return of(currTask);
  // }

  //////////////////////////////////////////////////////////////////////////////////////////////////

  getFormlyFieldConfigArrayCollectionFromTask(currentTask: Task, currentQuestionId: string,
    requestId: string, workflowId: string, taskId: string): Observable<FormlyFieldConfigArrayCollection[]> {
    const formlyFieldConfigArrayCollections: FormlyFieldConfigArrayCollection[] = [];
    const currTask = { ...currentTask };
    currTask.sections.map((section: Section) => {
      let FormlyFieldConfigArray: FormlyFieldConfig[] = this.getFormlyFieldConfigArrayFromSection(section, currentQuestionId, requestId, workflowId, taskId);
      let formlyFieldConfigArray: FormlyFieldConfigArrayCollection = new FormlyFieldConfigArrayCollection(FormlyFieldConfigArray, section.title);
      formlyFieldConfigArrayCollections.push(formlyFieldConfigArray);


    });
    return of(formlyFieldConfigArrayCollections);
  }

  getFormlyFieldConfigArrayFromSection(currentSection: Section, currentQuestionId: string,
    requestId: string, workflowId: string, taskId: string): FormlyFieldConfig[] {
    let FormlyFieldConfigArray: FormlyFieldConfig[] = [];
    let currSection = { ...currentSection };
    currSection.questions.map((question: Question) => {
      let field: FormlyFieldConfig = {};
      field.key = question.id.toString();
      if (field.key == currentQuestionId) {
        field.focus = true;
      }
      field.type = question.type;

      field.lifecycle = this.formlyFieldsService
        .getFormlyLifeCycleEventByQuestionType(field.type, requestId, workflowId, taskId);
      field.templateOptions = {
        label: question.label || "",
        options: question.options || [],
        required: question.required || false,
        disabled: question.disabled || false

      };      

      if (question.defaultValue) {
        if (field.type === CustomComponentsEnum.CUSTOM_CHECKBOX) {
          field.defaultValue = question.defaultValue === 'true' ? true : false;
        } else {
          field.defaultValue = question.defaultValue;
        }
      }

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
      debugger;
      FormlyFieldConfigArray.push(field);
    });
    return FormlyFieldConfigArray;
  }

  getFormlyFieldArrayConfigByQuestionType(formlyField: FormlyFieldConfig): FormlyFieldConfig {

    const field: FormlyFieldConfig = { ...formlyField };

    switch (field.type) {
      case CustomComponentsEnum.CUSTOM_EMAIL:
        field.fieldArray ={ ...emailFieldArray};
        break;
      // Todo: UI Team will add their respective field array reference here
      case CustomComponentsEnum.CUSTOM_PHONE:
        field.fieldArray = PhoneFieldConfig.fieldArray;
        break;
    }
    return field;

  }

  constructor(private apiService: ApiService,
    private store: Store<fromRootReducers.AppState>,
    private formlyFieldsService: FormlyFieldsService
  ) { }
}
