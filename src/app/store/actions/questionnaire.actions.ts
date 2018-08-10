import { Action } from '@ngrx/store';

export enum ActionTypes {
    GET_CURRENT_TASK = "[App State] Get Current Task",
    GET_CURRENT_TASK_SUCCESS = "[App State] Get Current Task Success",
    GET_CURRENT_TASK_FAIL = "[App State] Get Current Task Fail",

    ///Formly Parser Actions
    GET_CURRENT_FORMLY_CONFIG = "[App State] Get Current formly config",
    GET_CURRENT_FORMLY_CONFIG_SUCCESS = "[App State] Get Current formly config Success",
    GET_CURRENT_FORMLY_CONFIG_FAIL = "[App State] Get Current formly config Failure",



}

export class GetCurrentTask implements Action {
    readonly type = ActionTypes.GET_CURRENT_TASK
    constructor(public payload) {
        this.payload = payload
    }
}
export class GetCurrentTaskSuccess implements Action {
    readonly type = ActionTypes.GET_CURRENT_TASK_SUCCESS
    constructor(public payload) {
        this.payload = payload
    }
}

export class GetCurrentTaskFailure implements Action {
    readonly type = ActionTypes.GET_CURRENT_TASK_FAIL
    constructor(public payload) {
        this.payload = payload
    }
}

export class GetCurrentFormlyConfig implements Action {
    readonly type = ActionTypes.GET_CURRENT_FORMLY_CONFIG
    constructor(public payload) {
        this.payload = payload
    }
}
export class GetCurrentFormlyConfigSuccess implements Action {
    readonly type = ActionTypes.GET_CURRENT_FORMLY_CONFIG_SUCCESS
    constructor(public payload) {
        this.payload = payload
    }
}
export class GetCurrentFormlyConfigFailure implements Action {
    readonly type = ActionTypes.GET_CURRENT_FORMLY_CONFIG_FAIL
    constructor(public payload) {
        this.payload = payload
    }
}

export type QuesitonnaireActions = GetCurrentTask
    | GetCurrentTaskSuccess
    | GetCurrentTaskFailure
    | GetCurrentFormlyConfig
    | GetCurrentFormlyConfigSuccess
    | GetCurrentFormlyConfigFailure;