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
      case CustomComponentsEnum.CUSTOM_PHONE:
        return null;
      default:
        const GENERIC_LIFECYCLE_EVENT: FormlyLifeCycleOptions =
        {
          onInit: (form?: FormGroup, field?: FormlyFieldConfig, model?: any, options?: FormlyFormOptions) => {
            let key = field.key;
            let formObj = form.get(key);
            formObj.valueChanges
              .pipe(debounceTime(600))
              //Todo: To be Decided
              .subscribe((fieldValue) => {
                let questionaireRequest: QuestionaireDeltaRequest = {
                  requestId: requestId,
                  workflowId: workflowId,
                  taskId: taskId,
                  questionnaireItems: [{
                    answerKey: fieldValue,
                    questionId: key,
                    type: questionType
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
