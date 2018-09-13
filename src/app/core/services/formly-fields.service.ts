import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromRootReducers } from '../../store';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { debounceTime } from 'rxjs/operators';
import { FormlyLifeCycleOptions } from '@ngx-formly/core/lib/components/formly.field.config';
import { questionnaireActions } from '../../store/actions';
import { QuestionaireDeltaRequest } from '../models';
import { CustomComponentsEnum } from '../../custom-formly-fields/enums/custom-components.enum';

@Injectable({
  providedIn: 'root'
})
export class FormlyFieldsService {


  getFormlyLifeCycleEventByQuestionType(questionType: string, requestId: string,
    workflowId: string, taskId: string): FormlyLifeCycleOptions {
    switch (questionType) {
      // Add Custom LifeCycle events custom compound type
      case CustomComponentsEnum.CUSTOM_PHONE:
      case CustomComponentsEnum.CUSTOM_DOCUMENT_UPLOAD:
        return null;
      case CustomComponentsEnum.CUSTOM_ADDRESS_FIELDS:
      const ADDRESS_LIFECYCLE_EVENT: FormlyLifeCycleOptions = {
        onInit: (form?: FormGroup, field?: FormlyFieldConfig) => {
          // const key = field.key;
          // const formObj = form.get(key);
          // formObj.valueChanges
          //   .pipe(debounceTime(600))
          //   .subscribe((fieldValue) => {
          //     console.log(fieldValue);
          //   });
          field.formControl.valueChanges
            .pipe(debounceTime(600))
            .subscribe((fieldValue) => {
            });
        }
      };
      return ADDRESS_LIFECYCLE_EVENT;
      case CustomComponentsEnum.CUSTOM_EMAIL:
        const EMAIL_LIFECYCLE_EVENT: FormlyLifeCycleOptions = {
          onInit: (form?: FormGroup, field?: FormlyFieldConfig, model?: any, options?: FormlyFormOptions) => {
            const key = field.key;
            const formObj = form.get(key);
            const requiredFields = field.fieldArray.fieldGroup.map(item => {
              if (item.templateOptions.required) {
                return item.key
              }
            });
            console.log("requiredFields");
            console.log(requiredFields);


            formObj.valueChanges
              .pipe(debounceTime(600))
              .subscribe((fieldValue) => {
                console.log(fieldValue);
              });

          }

        };
        return EMAIL_LIFECYCLE_EVENT;
      default:
        const GENERIC_LIFECYCLE_EVENT: FormlyLifeCycleOptions =
        {
          onInit: (form?: FormGroup, field?: FormlyFieldConfig, model?: any, options?: FormlyFormOptions) => {
            let key = field.key;
            let formObj = form.get(key);
            formObj.valueChanges
              .pipe(debounceTime(600))
              .subscribe((fieldValue) => {
                let questionaireRequest: QuestionaireDeltaRequest = {
                  requestId: requestId,
                  workflowId: workflowId,
                  taskId: taskId,
                  questionnaireItems: [{

                    id: key,
                    type: questionType,
                    answers:[
                      {
                        value:fieldValue
                      }
                    ]
                  }]
                };
                // this.store.dispatch(new questionnaireActions.DeleteQuestionnaireErrorByQuestionId(key));
                this.store.dispatch(new questionnaireActions.SetCurrentQuestionId(key));
                this.store.dispatch(new questionnaireActions.GetCurrentFieldChangeDelta(questionaireRequest));
              });
          }
        }
        return GENERIC_LIFECYCLE_EVENT;
    }

  }
  constructor(private store: Store<fromRootReducers.AppState>) {

  }
}
