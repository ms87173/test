import { Action } from '@ngrx/store';
import { SignAndSubmit, SignAndSubmitRequest, Task, FormlyFieldConfigArrayCollection } from '../../core/models';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AgreeAndSubmitRequest } from '../../core/models/agree-and-submit-request';

export enum ActionTypes {

    GET_SIGN_AND_SUBMIT_TASK = '[App State] Get Sign And Submit Task',
    GET_SIGN_AND_SUBMIT_TASK_SUCCESS = '[App State] Get Sign And Submit Task Success',
    GET_SIGN_AND_SUBMIT_TASK_FAIL = '[App State] Get Sign And Submit Task Failure',

    GET_SIGN_AND_SUBMIT_TASK_FORMLY_CONFIG = '[App State] Get Sign And Submit Task Formly Config',
    GET_SIGN_AND_SUBMIT_TASK_FORMLY_CONFIG_SUCCESS = '[App State] Get Sign And Submit Task Formly Config Success',
    GET_SIGN_AND_SUBMIT_TASK_FORMLY_CONFIG_FAIL = '[App State] Get Sign And Submit Task Formly Config Failure',

    AGREE_AND_SUBMIT_QUESTIONNAIRE = '[App State] Agree and Submit Questionnaire',
    AGREE_AND_SUBMIT_QUESTIONNAIRE_SUCCESS = '[App State] Agree and Submit Questionnaire Success',
    AGREE_AND_SUBMIT_QUESTIONNAIRE_FAIL = '[App State] Agree and Submit Questionnaire Failure',
    SET_TNC_REVIEW='[App State] Set Terms And Condition Review State',
    SET_AGREE_SUBMIT_MODE = '[App State] Set Agree and Submit button state'


}

export class GetSignAndSubmitTask implements Action {
    readonly type = ActionTypes.GET_SIGN_AND_SUBMIT_TASK;
    constructor(public payload: SignAndSubmitRequest) {
        this.payload = payload;
    }
}
export class SetAgreeAndSubmitMode implements Action {
    readonly type = ActionTypes.SET_AGREE_SUBMIT_MODE
    constructor(public payload) {
        //console.log(payload, '::payload');
        this.payload = payload;
    }
}

export class GetSignAndSubmitTaskSuccess implements Action {
    readonly type = ActionTypes.GET_SIGN_AND_SUBMIT_TASK_SUCCESS;
    constructor(public payload: SignAndSubmit) {
        this.payload = payload;
    }
}

export class GetSignAndSubmitTaskFailure implements Action {
    readonly type = ActionTypes.GET_SIGN_AND_SUBMIT_TASK_FAIL;
    constructor(public payload: any) {
        this.payload = payload;
    }
}
export class GetSignAndSubmitTaskFormlyConfig implements Action {
    readonly type = ActionTypes.GET_SIGN_AND_SUBMIT_TASK_FORMLY_CONFIG;
    constructor(public payload: Task) {
        this.payload = payload;
    }
}
export class GetSignAndSubmitTaskFormlyConfigSuccess implements Action {
    readonly type = ActionTypes.GET_SIGN_AND_SUBMIT_TASK_FORMLY_CONFIG_SUCCESS;
    constructor(public payload: FormlyFieldConfigArrayCollection[]) {
        this.payload = payload;
    }
}
export class GetSignAndSubmitTaskFormlyConfigFailure implements Action {
    readonly type = ActionTypes.GET_SIGN_AND_SUBMIT_TASK_FORMLY_CONFIG_FAIL;
    constructor(public payload: any) {
        this.payload = payload;
    }
}

export class AgreeAndSubmitQuestionnaire implements Action {
    readonly type = ActionTypes.AGREE_AND_SUBMIT_QUESTIONNAIRE;
    constructor(public payload: AgreeAndSubmitRequest) {
        this.payload = payload;
    }
}
export class AgreeAndSubmitQuestionnaireSuccess implements Action {
    readonly type = ActionTypes.AGREE_AND_SUBMIT_QUESTIONNAIRE_SUCCESS;
    constructor(public payload: any) {
        this.payload = payload;
    }
}
export class AgreeAndSubmitQuestionnaireFailure implements Action {
    readonly type = ActionTypes.AGREE_AND_SUBMIT_QUESTIONNAIRE_FAIL;
    constructor(public payload: any) {
        this.payload = payload;
    }
}

export class SetTncReview implements Action {
    readonly type = ActionTypes.SET_TNC_REVIEW;
    constructor(public payload:boolean) {
        this.payload = payload;
    }
}


export type SignAndSubmitActions = GetSignAndSubmitTask
    | GetSignAndSubmitTaskSuccess
    | GetSignAndSubmitTaskFailure
    | GetSignAndSubmitTaskFormlyConfig
    | GetSignAndSubmitTaskFormlyConfigSuccess
    | GetSignAndSubmitTaskFormlyConfigFailure
    | AgreeAndSubmitQuestionnaire
    | AgreeAndSubmitQuestionnaireSuccess
    | AgreeAndSubmitQuestionnaireFailure
    | SetTncReview
    | SetAgreeAndSubmitMode
    ;
