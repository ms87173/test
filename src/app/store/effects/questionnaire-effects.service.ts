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
  SetSectionEditiableMode,
  SetSectionEditiableModeSuccess
} from '../actions/questionnaire.actions';
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
  );

  @Effect() getCurrentQuestionnaireDelta = this.actions$.pipe(
    ofType(ActionTypes.GET_CURRENT_FIELD_CHANGE_DELTA),
    switchMap(
      (action: GetCurrentFieldChangeDelta) =>
        this.questionnaireService.getFieldChangeDelta(action.payload)
          .pipe(
            map((currentTask) => {
              return (new GetCurrentFieldChangeDeltaSuccess(currentTask));
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

  @Effect() setAllEditiableModeProperty = this.actions$.pipe(
    ofType(ActionTypes.SET_SECTIONS_EDITABLE_MODE),
    switchMap(
      (action: SetSectionEditiableMode) => this.questionnaireService
        .setAllEditiableModeProperty
        (action.payload.currentTask,
        action.payload.mode
        )
        .pipe(
          map((currentTask) => (new SetSectionEditiableModeSuccess({mode:action.payload.mode, currentTask:currentTask}))
          ),
          catchError(
            (err) => of(new GetCurrentQuestionnaireFormlyConfigFailure(err))
          )
        )
    )
  );




  constructor(private actions$: Actions,
    private questionnaireService: QuestionnaireService,
    private ngxFormlyParserService: NgxFormlyParserService
  ) { }


}
