import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {
  ActionTypes, GetCurrentTask, GetCurrentTaskSuccess, GetCurrentTaskFailure,
  GetCurrentFormlyConfig, GetCurrentFormlyConfigSuccess, GetCurrentFieldChangeDelta,
  GetCurrentFieldChangeDeltaSuccess, GetCurrentFieldChangeDeltaFailure, MergeDeltaFieldChangeAndCurrentTask, MergeDeltaFieldChangeAndCurrentTaskSuccess, MergeDeltaFieldChangeAndCurrentTaskFailure, UpdateCurrentTask, GetCurrentQuestionnaireFormlyConfigSuccess, GetCurrentQuestionnaireFormlyConfigFailure, GetCurrentQuestionnaireFormlyConfig
}
  from '../actions/questionnaire.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { QuestionnaireService, NgxFormlyParserService, ApiService } from '../../core/services';
import { Observable } from 'rxjs/Observable';
import { QuestionaireDeltaResponse } from '../../core/models';
import { of } from 'rxjs';


@Injectable()
export class QuestionnaireEffectsService {


  @Effect() getCurrentTask = this.actions$.pipe(
    ofType(ActionTypes.GET_CURRENT_TASK),
    switchMap(
      (action: GetCurrentTask) => this.questionnaireService.getCurrentTask(action.payload)
        .pipe(
          map((task) => (new GetCurrentTaskSuccess(task))
          ),
          catchError(
            (err) => of(new GetCurrentTaskFailure(err))
          )
        )
    )
  )

  // @Effect() getCurrentQuestionnaireConfig = this.actions$.pipe(
  //   ofType(ActionTypes.GET_CURRENT_FORMLY_CONFIG),
  //   switchMap(
  //     (action: GetCurrentFormlyConfig) => this.ngxFormlyParserService
  //       .getFormlyFieldConfigFromTask(action.payload.task, action.payload.currentQuestionId)

  //       .pipe(
  //         map((formlyConfig) => (new GetCurrentFormlyConfigSuccess(formlyConfig))
  //         ),
  //         catchError(
  //           (err) => of(new GetCurrentTaskFailure(err))
  //         )
  //       )
  //   )
  // )

  @Effect() getCurrentQuestionnaireDelta = this.actions$.pipe(
    ofType(ActionTypes.GET_CURRENT_FIELD_CHANGE_DELTA),
    switchMap(
      (action: GetCurrentFieldChangeDelta) =>

      
        this.questionnaireService.getFieldChangeDelta(action.payload)
          .pipe(
            map((currentTask) => {
              return (new GetCurrentFieldChangeDeltaSuccess(currentTask))

            }
            ),
            catchError(
              (err) => of(new GetCurrentFieldChangeDeltaFailure(err))
            )
          )
    )
  )

  // @Effect() getMergedCurrentTaskWithDelta = this.actions$.pipe(
  //   ofType(ActionTypes.MERGE_DELTA_FIELD_CHANGE_DELTA_AND_CURRENT_TASK),
  //   switchMap(
  //     (action: MergeDeltaFieldChangeAndCurrentTask) =>
  //       this.ngxFormlyParserService.mergeFieldChangeDeltaAndCurrentcurrentTask(
  //         action.payload.currentTask,
  //         action.payload.delta,
  //         action.payload.model)

  //         .pipe(
  //           map((mergedCurrentTaskWithDelta) => (new MergeDeltaFieldChangeAndCurrentTaskSuccess(mergedCurrentTaskWithDelta))
  //           ),
  //           catchError(
  //             (err) => of(new MergeDeltaFieldChangeAndCurrentTaskFailure(err))
  //           )
  //         )
  //   )
  // )
  //////////////////////////////////////////////////////////////////////////////////////////

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
  )



  constructor(private actions$: Actions,
    private questionnaireService: QuestionnaireService,
    private ngxFormlyParserService: NgxFormlyParserService
  ) { }


}
