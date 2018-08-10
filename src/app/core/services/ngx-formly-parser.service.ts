import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Task } from '../models/task';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Section } from '../models/section';
import { Question } from '../models/question';
import { FormGroup } from '@angular/forms';
import { FormlyLifeCycleOptions } from '@ngx-formly/core/lib/components/formly.field.config';
import { debounceTime } from 'rxjs/operators';
import { QuestionaireDeltaRequest } from '../models/questionaire-delta-request';
import { QuestionaireDeltaResponse } from '../models/questionaire-delta-response';
import { QuestionaireDeltaQuestion } from '../models/questionaire-delta-question';
import * as _ from "lodash";
import { map } from 'rxjs/operator/map'

@Injectable()
export class NgxFormlyParserService {

  ///Todo: Waiting for client Store module. 
  /// this should be handled in a property from state
  public deltaValues = new BehaviorSubject<QuestionaireDeltaResponse>(null);
  public currentQuestionId: string = null;


  public task: Task = {
    label: "Interest Checking",
    description: "This is your primary interest bearing account.",
    id: "<unique-identifier>",
    status: "<string>",
    sections: [
      {
        title: "Account Information",
        questions: [
          {
            id: "<question-id>",
            label: "Would you like to earn interest this account?",
            type: "",

            required: true,
            readOnly: true,
            placeHolder: "<string>",
            options: [
              {
                label: "",
                value: ""
              }
            ],

            tooltipText: "<string>",
            defaultValue: "<any>"
          }
        ]

      }
    ]
  }

  private fieldChangeLifecycleTrigger: FormlyLifeCycleOptions = {
    onInit: (form?: FormGroup, field?: FormlyFieldConfig, model?: any, options?: FormlyFormOptions) => {
      let key = field.key;
      let formObj = form.get(key);

      formObj.valueChanges
        //Todo: To be Decided
        .pipe(debounceTime(600))
        .subscribe((fieldValue) => {
          this.currentQuestionId = key;
          let questionaireRequest: QuestionaireDeltaRequest = {
            id: key,
            value: fieldValue
          }
          //Todo: Waiting for client Store module. 
          /// Individual Field change trigger with state  management action
          //Remove this line

          this.getDelta(questionaireRequest);
        });

    }
  }

  constructor(private apiService: ApiService) {


  }

  getFormlyFieldConfigFromTask(task: Task, currentQuestionId: string): FormlyFieldConfig[] {
    let currentConfig: FormlyFieldConfig = {
    };

    task.sections.map((section: Section) => {
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
          required: question.required
        };


        ////  Find Immutable way
        fieldGroup.push(field);


      });
      currentConfig.fieldGroup = fieldGroup;


    });

    return [currentConfig];

  }

  getDelta(deltaRequest: QuestionaireDeltaRequest) {
    let questionaireDeltaResponse: QuestionaireDeltaResponse = null;

    switch (deltaRequest.id) {
      case "InterestCheckingCheckBox":
        this.apiService.get("assets/json/questionaireDeltaResponseExample1.json")
          .subscribe((delta) => {
            questionaireDeltaResponse = delta;
            this.deltaValues.next(questionaireDeltaResponse);
          });
        break;
      case "SavingAccountTextBox":
        this.apiService.get("assets/json/questionaireDeltaResponseExample2.json")
          .subscribe((delta) => {

            questionaireDeltaResponse = delta;
            this.deltaValues.next(questionaireDeltaResponse);
          });
        break;
      case "ColorInputBox":
        this.apiService.get("assets/json/questionaireDeltaResponseExample3.json")
          .subscribe((delta) => {

            questionaireDeltaResponse = delta;
            this.deltaValues.next(questionaireDeltaResponse);
          });
        break;
    }
  }

  getFormlyFieldConfigFromDelta(task: Task, delta: QuestionaireDeltaResponse, model: any): Observable<FormlyFieldConfig[]> {

    let newTaskConfig: FormlyFieldConfig[] = null;
    if (delta) {

      if (delta.delete) {
        let modelProperties = _.keys(model);

        delta.delete.forEach((question) => {
          let currentSection = task.sections.find((section) => {
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
          let currentSection = task.sections.find((section) => {
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




      newTaskConfig = this.getFormlyFieldConfigFromTask(task, this.currentQuestionId);

    }
    return of(newTaskConfig);
  }

}