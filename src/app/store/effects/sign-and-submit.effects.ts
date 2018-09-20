import { Injectable } from "@angular/core";
import { switchMap, map, catchError } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
    ActionTypes,
    GetSignAndSubmitTask,
    GetSignAndSubmitTaskSuccess,
    GetSignAndSubmitTaskFailure,
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

    @Effect() getSignAndSubmitTaskFormlyConfigEffect = this.actions$.pipe(
        ofType(ActionTypes.GET_SIGN_AND_SUBMIT_TASK_FORMLY_CONFIG),
        switchMap(
            (action: GetSignAndSubmitTaskFormlyConfig) =>
                this.ngxFormlyParserService.getFormlyFieldConfigArrayCollectionFromTask(
                    action.payload,
                    null,
                    null,
                    null,
                    null,
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
                                const requestId = action.payload.requestId;
                                return new RouterGo({
                                    path: ['ddo', 'applications', requestId, 'success']
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