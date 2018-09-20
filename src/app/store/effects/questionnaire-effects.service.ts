import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {
  ActionTypes,
  GetCurrentTask,
  GetCurrentTaskSuccess,
  GetCurrentTaskFailure,
  GetCurrentFieldChangeDelta,
  GetCurrentFieldChangeDeltaSuccess,
  GetCurrentFieldChangeDeltaFailure,
  GetCurrentQuestionnaireFormlyConfigSuccess,
  GetCurrentQuestionnaireFormlyConfigFailure,
  GetCurrentQuestionnaireFormlyConfig,
  SaveChangesBySectionInTask,
  SaveChangesBySectionInTaskFailure,
  DiscardChangesBySectionInTask,
  DiscardChangesBySectionInTaskFailure,

} from '../actions/questionnaire.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { QuestionnaireService, NgxFormlyParserService, ApiService, ApplicationRequestService } from '../../core/services';
import { Observable } from 'rxjs/Observable';
import { QuestionaireDeltaResponse } from '../../core/models';
import { of } from 'rxjs';
import { EXISTING_COMPONENTS } from '../../custom-formly-fields/enums/custom-components.enum';


@Injectable()
export class QuestionnaireEffectsService {


  @Effect() getCurrentTask = this.actions$.pipe(
    ofType(ActionTypes.GET_CURRENT_TASK),
    switchMap(
      (action: GetCurrentTask) => this.questionnaireService.getCurrentTask(action.payload)
        .pipe(
          map((task) => {
            let currTask = { ...task };
            currTask.sections.forEach((section) => {
              section.questions = section.questions.filter((question) => {
                return EXISTING_COMPONENTS.includes(question.type);
              })
            });
            return new GetCurrentTaskSuccess(currTask);
          }

          ),
          catchError(
            (err) => of(new GetCurrentTaskFailure(err))
          )
        )
    )
  );

  @Effect() getCurrentQuestionnaireDelta = this.actions$.pipe(
    ofType(ActionTypes.GET_CURRENT_FIELD_CHANGE_DELTA),
    switchMap(
      (action: GetCurrentFieldChangeDelta) =>
        this.questionnaireService.getFieldChangeDelta(action.payload)
          .pipe(
            map((currentTask) => {
              console.log(currentTask, 'questionSErv');
              let currTask = { ...currentTask };
              currTask.sections.forEach((section) => {
                section.questions = section.questions.filter((question) => {
                  return EXISTING_COMPONENTS.includes(question.type);
                })
              });

              return (new GetCurrentFieldChangeDeltaSuccess(currTask));
            }
            ),
            catchError(
              (err) => of(new GetCurrentFieldChangeDeltaFailure(err))
            )
          )
    )
  );

  @Effect() getCurrentQuestionnaireConfig = this.actions$.pipe(
    ofType(ActionTypes.GET_CURRENT_QUESTIONNAIRE_FORMLY_CONFIG),
    switchMap(
      (action: GetCurrentQuestionnaireFormlyConfig) => this.ngxFormlyParserService
        .getFormlyFieldConfigArrayCollectionFromTask
        (action.payload.task,
        action.payload.currentQuestionId,
        action.payload.requestId,
        action.payload.workflowId,
        action.payload.taskId

        )

        .pipe(
          map((FormlyFieldConfigArrayCollections) => (new GetCurrentQuestionnaireFormlyConfigSuccess(FormlyFieldConfigArrayCollections))
          ),
          catchError(
            (err) => of(new GetCurrentQuestionnaireFormlyConfigFailure(err))
          )
        )
    )
  );

  @Effect() saveChangesBySectionInTask = this.actions$.pipe(
    ofType(ActionTypes.SAVE_CHANGES_BY_SECTION_IN_TASK),
    switchMap(
      (action: SaveChangesBySectionInTask) => this.applicationRequestService
      .saveApplicationRequestTask(action.payload)
        .pipe(
          map((response) => (new GetCurrentTask(action.payload))
          ),
          catchError(
            (err) => of(new SaveChangesBySectionInTaskFailure(err))
          )
        )
    )
  );

  @Effect() discardChangesBySectionInTask = this.actions$.pipe(
    ofType(ActionTypes.DISCARD_CHANGES_BY_SECTION_IN_TASK),
    switchMap(
      (action: DiscardChangesBySectionInTask) => this.applicationRequestService
      .discardApplicationRequestTask(action.payload)
        .pipe(
          map((response) => (new GetCurrentTask(action.payload))
          ),
          catchError(
            (err) => of(new DiscardChangesBySectionInTaskFailure(err))
          )
        )
    )
  );






  constructor(private actions$: Actions,
    private questionnaireService: QuestionnaireService,
    private ngxFormlyParserService: NgxFormlyParserService,
    private applicationRequestService:ApplicationRequestService
  ) { }


}
