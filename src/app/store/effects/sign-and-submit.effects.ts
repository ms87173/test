import { Injectable } from "@angular/core";
import { switchMap, map, catchError } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
    ActionTypes,
    GetSignAndSubmitTask,
    GetSignAndSubmitTaskSuccess,
    GetSignAndSubmitTaskFailure,
    GetSignAndSubmitDelta,
    GetSignAndSubmitDeltaSuccess,
    GetSignAndSubmitDeltaFailure,
    GetSignAndSubmitTaskFormlyConfig,
    GetSignAndSubmitTaskFormlyConfigSuccess,
    GetSignAndSubmitTaskFormlyConfigFailure,
    AgreeAndSubmitQuestionnaire,
    AgreeAndSubmitQuestionnaireSuccess,
    AgreeAndSubmitQuestionnaireFailure

} from '../actions/sign-and-submit.actions'
import { SignAndSubmit, FormlyFieldConfigArrayCollection } from "../../core/models";
import { SignAndSubmitService } from "../../core/services/sign-and-submit.service";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { TASK_TYPES } from "../../core/constants/application-request.constants";
import { NgxFormlyParserService } from "../../core/services";
import { RouterGo } from "../actions/router.actions";
import { EXISTING_COMPONENTS } from '../../custom-formly-fields/enums/custom-components.enum';

@Injectable()
export class ApplicationSignAndSubmitEffects {

    @Effect() getSignAndSubmitTaskEffect = this.actions$.pipe(
        ofType(ActionTypes.GET_SIGN_AND_SUBMIT_TASK),
        switchMap(
            (action: GetSignAndSubmitTask) =>
                this.signAndSubmitService.getSignAndSubmitTask(action.payload)
                    .pipe(
                        map(
                            (signAndSubmitTask: SignAndSubmit) => {
                                return new GetSignAndSubmitTaskSuccess(signAndSubmitTask);
                            }
                        ),
                        catchError(
                            (err) => of(new GetSignAndSubmitTaskFailure(err))
                        )
                    )
        ));

    @Effect() getSignAndSubmitDelta = this.actions$.pipe(
        ofType(ActionTypes.GET_AGREE_AND_SUBMIT_FIELD_CHANGE_DELTA),
        switchMap(
            (action: GetSignAndSubmitDelta) =>
                this.signAndSubmitService.getFieldChangeDelta(action.payload)
                    .pipe(
                        map((currentTask) => {
                            // console.log(currentTask, 'questionSErv');
                            const currTask = { ...currentTask };
                            currTask.sections.forEach((section) => {
                                section.questions = section.questions.filter((question) => {
                                    return EXISTING_COMPONENTS.includes(question.type);
                                });
                            });

                            return (new GetSignAndSubmitDeltaSuccess(currTask));
                        }
                        ),
                        catchError(
                            (err) => of(new GetSignAndSubmitDeltaFailure(err))
                        )
                    )
        )
    );

    @Effect() getSignAndSubmitTaskFormlyConfigEffect = this.actions$.pipe(
        ofType(ActionTypes.GET_SIGN_AND_SUBMIT_TASK_FORMLY_CONFIG),
        switchMap(
            (action: GetSignAndSubmitTaskFormlyConfig) =>
                this.ngxFormlyParserService.getFormlyFieldConfigArrayCollectionFromTask(
                    action.payload.task,
                    action.payload.signAndSubmitId,
                    action.payload.requestId,
                    action.payload.workflowId,
                    action.payload.taskId,
                    TASK_TYPES.SIGN_AND_SUMBIT)
                    .pipe(
                        map(
                            (formlyFieldArray: FormlyFieldConfigArrayCollection[]) => {
                                return new GetSignAndSubmitTaskFormlyConfigSuccess(formlyFieldArray);
                            }
                        ),
                        catchError(
                            (err) => of(new GetSignAndSubmitTaskFormlyConfigFailure(err))
                        )
                    )
        ));


    @Effect() agreeAndSubmitQuestionnaireEffect = this.actions$.pipe(
        ofType(ActionTypes.AGREE_AND_SUBMIT_QUESTIONNAIRE),
        switchMap(
            (action: AgreeAndSubmitQuestionnaire) =>
                this.signAndSubmitService.agreeAndSubmitApplication(action.payload)
                    .pipe(
                        map(
                            (response: any) => {
                                return new RouterGo({
                                    path: ['ddo', 'my-applications']
                                });
                            }
                        ),
                        catchError(
                            (err) => of(new AgreeAndSubmitQuestionnaireFailure(err))
                        )
                    )
        ));


    constructor(
        private signAndSubmitService: SignAndSubmitService,
        private ngxFormlyParserService: NgxFormlyParserService,
        private actions$: Actions
    ) { }
}