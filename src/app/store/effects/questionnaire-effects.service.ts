import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from "@ngrx/effects";
import { ActionTypes, GetCurrentTask, GetCurrentTaskSuccess, GetCurrentTaskFailure, GetCurrentFormlyConfig, GetCurrentFormlyConfigSuccess } from "../actions/questionnaire.actions";
import { switchMap, map, catchError } from 'rxjs/operators';
import { QuestionnaireService, Task, NgxFormlyParserService } from "../../core";
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

  @Effect() getcurrentQuestionnaireConfig = this.actions$.pipe(
    ofType(ActionTypes.GET_CURRENT_FORMLY_CONFIG),
    switchMap(
      (action: GetCurrentFormlyConfig) =>
        of(this.ngxFormlyParserService.getFormlyFieldConfigFromTask(action.payload.task, action.payload.currentQuestionId))
          .pipe(
            map((formlyConfig) => (new GetCurrentFormlyConfigSuccess(formlyConfig))
            ),
            catchError(
              (err) => of(new GetCurrentTaskFailure(err))
            )
          )
    )
  )



  constructor(private actions$: Actions,
    private questionnaireService: QuestionnaireService,
    private ngxFormlyParserService: NgxFormlyParserService
  ) { }


}
