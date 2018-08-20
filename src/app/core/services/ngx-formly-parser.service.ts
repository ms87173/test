import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Section } from '../models/section';
import { Question } from '../models/question';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormlyLifeCycleOptions } from '@ngx-formly/core/lib/components/formly.field.config';
import { QuestionaireDeltaRequest } from '../models/questionaire-delta-request';
import { QuestionaireDeltaResponse } from '../models/questionaire-delta-response';
import * as _ from 'lodash';
import { Store } from '@ngrx/store';
import { fromRootReducers } from '../../store'
import { questionnaireActions, } from '../../store/actions';
import { Task } from '../models';
import { debounceTime } from 'rxjs/operators';

@Injectable()
export class NgxFormlyParserService {

  ///Todo: Waiting for client Store module. 
  /// this should be handled in a property from state
  public currentQuestionId: string = null;
  public fieldChangeObj = null;

  private fieldChangeLifecycleTrigger: FormlyLifeCycleOptions = {
    onInit: (form?: FormGroup, field?: FormlyFieldConfig, model?: any, options?: FormlyFormOptions) => {
      let key = field.key;
      let formObj = form.get(key);

      formObj.valueChanges
        .pipe(debounceTime(600))
        //Todo: To be Decided
        .subscribe((fieldValue) => {
          this.currentQuestionId = key;
          let questionaireRequest: QuestionaireDeltaRequest = {
            id: key,
            value: fieldValue
          };
          this.store.dispatch(new questionnaireActions.DeleteQuestionnaireErrorByQuestionId(this.currentQuestionId));
          this.store.dispatch(new questionnaireActions.GetCurrentFieldChangeDelta(questionaireRequest));
        });
    }
  }
  getfieldChange() {
    return of(this.fieldChangeObj);
  }

  getFormlyFieldConfigFromTask(currentTask: Task, currentQuestionId: string): Observable<FormlyFieldConfig[]> {
    let currentConfig: FormlyFieldConfig = {
    };

    currentTask.sections.map((section: Section) => {
      // currentConfig.key = section.id;
      currentConfig.wrappers = ['form-group'];
      currentConfig.templateOptions = {
        label: section.title
      };
      let fieldGroup: FormlyFieldConfig[] = [];
      section.questions.map((question: Question) => {
        let field: FormlyFieldConfig = {};
        if (question.id == currentQuestionId) {
          console.log(question.id);
          console.log(currentQuestionId);
          field.focus = true;
        }

        field.key = question.id;
        field.type = question.type;
        field.lifecycle = this.fieldChangeLifecycleTrigger;

        field.templateOptions = {
          label: question.label,
          options: question.options,
          required: question.required,
        };

        if (question.serverErrorMessage) {
          field.validators = {
            ip: {
              expression: (c) => true,
              message: (error, field: FormlyFieldConfig) => question.serverErrorMessage,
            }
          }
        }
        ////Todo:Find Immutable way
        fieldGroup.push(field);
      });
      currentConfig.fieldGroup = fieldGroup;
    });
    return of([currentConfig]);
  }

  ///Todo: Change it to call delta from  server

  mergeFieldChangeDeltaAndCurrentcurrentTask(currentTask: Task, delta: QuestionaireDeltaResponse, model: any): Observable<Task> {

    let currTask = { ...currentTask };
    if (delta) {

      if (delta.delete) {
        let modelProperties = _.keys(model);

        delta.delete.forEach((question) => {
          let currentSection = currTask.sections.find((section) => {
            return section.title == question.sectionName;
          });

          currentSection.questions = currentSection.questions
            .filter((questionItem) => {
              return questionItem.id !== question.id
            });

          if (modelProperties.find((modelproperty) => { return modelproperty == question.id; })) {
            delete model[question.id];
          }
        });
      }

      ////Todo: Update Loop for delta

      if (delta.new) {
        delta.new.forEach((question) => {
          let currentSection = currTask.sections.find((section) => {
            return section.title === question.sectionName;
          });
          let currentQuestionIndex = currentSection.questions.findIndex((questioItem) => {
            return questioItem.id == question.questionIdAfterToBeInserted;
          });

          let newQuestion: Question = {
            id: question.id,
            defaultValue: question.defaultValue,
            label: question.label,
            options: question.options,
            placeHolder: question.placeHolder,
            readOnly: question.readOnly,
            required: question.required,
            tooltipText: question.tooltipText,
            type: question.type
          }
          if (currentSection.questions.findIndex((questioItem) => { return questioItem.id == question.id }) == -1)
            currentSection.questions.splice(currentQuestionIndex + 1, 0, newQuestion);
        });
      }

      ////Todo:Error loop for delta
      
      if (delta.errors) {
        delta.errors.forEach((error) => {
          let currentSection = currTask.sections.find((section) => {
            return section.title === error.sectionName;
          });
          let currentQuestion = currentSection.questions.find((questionItem) => {
            return questionItem.id == error.id;
          });
          currentQuestion.serverErrorMessage = error.errorMessage;
        });
      }
    }
    return of(currTask);
  }

  constructor(private apiService: ApiService,
    private store: Store<fromRootReducers.AppState>
  ) { }

}