import { Action } from '@ngrx/store';
import { Task, QuestionaireDeltaRequest, QuestionaireDeltaResponse, QuestionaireDeltaError, FormlyFieldConfigArrayCollection, TaskRequest } from '../../core/models';
import { FormlyFieldConfig } from '@ngx-formly/core';

export enum ActionTypes {
    /// Current Task Actions
    GET_CURRENT_TASK = '[App State] Get Current Task',
    GET_CURRENT_TASK_SUCCESS = '[App State] Get Current Task Success',
    GET_CURRENT_TASK_FAIL = '[App State] Get Current Task Failure',

    GET_CURRENT_FIELD_CHANGE_DELTA = '[App State] Get Current Field Change Trigger',
    GET_CURRENT_FIELD_CHANGE_DELTA_SUCCESS = '[App State] Get Current Field Change Trigger Success',
    GET_CURRENT_FIELD_CHANGE_DELTA_FAIL = '[App State] Get Current Field Change Trigger Failure',

    RESET_QUESTIONNAIRE_STATE_TO_INTIAL_STATE = '[App State] Reset Questionnaire State To Intial State',

    GET_CURRENT_QUESTIONNAIRE_FORMLY_CONFIG = '[App State] Get Current Questionnaire formly config',
    GET_CURRENT_QUESTIONNAIRE_FORMLY_CONFIG_SUCCESS = '[App State] Get Current Questionnaire formly config Success',
    GET_CURRENT_QUESTIONNAIRE_FORMLY_CONFIG_FAIL = '[App State] Get Current  Questionnaire formly config Failure',

    SET_CURRENT_QUESTION_ID = "[App State] Set The Current Question Id"
}

export class GetCurrentTask implements Action {
    readonly type = ActionTypes.GET_CURRENT_TASK
    constructor(public payload: TaskRequest) {
        this.payload = payload
    }
}
export class GetCurrentTaskSuccess implements Action {
    readonly type = ActionTypes.GET_CURRENT_TASK_SUCCESS
    constructor(public payload: Task) {
        this.payload = payload
    }
}

export class GetCurrentTaskFailure implements Action {
    readonly type = ActionTypes.GET_CURRENT_TASK_FAIL
    constructor(public payload) {
        this.payload = payload
    }
}

export class GetCurrentFieldChangeDelta implements Action {
    readonly type = ActionTypes.GET_CURRENT_FIELD_CHANGE_DELTA
    constructor(public payload: QuestionaireDeltaRequest) {
        this.payload = payload
    }
}
export class GetCurrentFieldChangeDeltaSuccess implements Action {
    readonly type = ActionTypes.GET_CURRENT_FIELD_CHANGE_DELTA_SUCCESS

    constructor(public payload: Task) {
        this.payload = payload
    }
}
export class GetCurrentFieldChangeDeltaFailure implements Action {
    readonly type = ActionTypes.GET_CURRENT_FIELD_CHANGE_DELTA_FAIL
    constructor(public payload) {
        this.payload = payload
    }
}
export class ResetQuestionnaireState implements Action {
    readonly type = ActionTypes.RESET_QUESTIONNAIRE_STATE_TO_INTIAL_STATE

}

export class GetCurrentQuestionnaireFormlyConfig implements Action {
    readonly type = ActionTypes.GET_CURRENT_QUESTIONNAIRE_FORMLY_CONFIG
    constructor(public payload: {
        task: Task, currentQuestionId: string,
        requestId: string, workflowId: string, taskId: string
    }) {
        this.payload = payload
    }
}
export class GetCurrentQuestionnaireFormlyConfigSuccess implements Action {
    readonly type = ActionTypes.GET_CURRENT_QUESTIONNAIRE_FORMLY_CONFIG_SUCCESS
    constructor(public payload: FormlyFieldConfigArrayCollection[]) {
        this.payload = payload
    }
}
export class GetCurrentQuestionnaireFormlyConfigFailure implements Action {
    readonly type = ActionTypes.GET_CURRENT_QUESTIONNAIRE_FORMLY_CONFIG_FAIL
    constructor(public payload) {
        this.payload = payload
    }
}

export class SetCurrentQuestionId implements Action {
    readonly type = ActionTypes.SET_CURRENT_QUESTION_ID
    constructor(public payload: string) {
        this.payload = payload
    }
}

export type QuesitonnaireActions = GetCurrentTask
    | GetCurrentTaskSuccess
    | GetCurrentTaskFailure
    | GetCurrentFieldChangeDelta
    | GetCurrentFieldChangeDeltaSuccess
    | GetCurrentFieldChangeDeltaFailure
    | ResetQuestionnaireState
    | GetCurrentQuestionnaireFormlyConfig
    | GetCurrentQuestionnaireFormlyConfigSuccess
    | GetCurrentQuestionnaireFormlyConfigFailure
    | SetCurrentQuestionId;