import { Action } from '@ngrx/store';

export enum ActionTypes {
    GET_APPLICATION_REQUEST = '[App State] Get Application Request',
    GET_APPLICATION_REQUEST_SUCCESS = '[App State] Get Application Request Success',
    GET_APPLICATION_REQUEST_FAIL = '[App State] Get Application Request Failure',
    CLEAR_APPLICATION_REQUEST = '[App State] Clear Application Request',
    GET_APPLICATION_REQUEST_WORKFLOWS = '[App State] Get Application Request Workflows',
    GET_APPLICATION_REQUEST_WORKFLOWS_SUCCESS = '[App State] Get Application Request Workflows Success',
    GET_APPLICATION_REQUEST_WORKFLOWS_FAILURE = '[App State] Get Application Request Workflows Failure',
    DETERMINE_PENDING_TASK_OF_APPLICATION_REQUEST = '[App State] Determine pending task of application request',
    GET_APPLICATION_REQUEST_TASK = '[App State] Get Application request task',
    GET_APPLICATION_REQUEST_TASK_SUCCESS = '[App State] Get Application request task success',
    GET_APPLICATION_REQUEST_TASK_FAILURE = '[App State] Get Application request task failure'    
    // SET_APPLICATION_REQUEST_TASK = '[App State] Select Application request task',
    // BUILD_NAVIGATION_CONFIG = '[Some State] Build Navigation Config',
    // SELECT_NAVIGATION_ITEM = '[Some State] Select Navigation Item',
}

export class GetApplicationRequest implements Action {
    readonly type = ActionTypes.GET_APPLICATION_REQUEST;
    constructor(public payload: string) {
    }
}
export class GetApplicationRequestSuccess implements Action {
    readonly type = ActionTypes.GET_APPLICATION_REQUEST_SUCCESS;
    constructor(public payload: any) {
    }
}
export class GetApplicationRequestFailure implements Action {
    readonly type = ActionTypes.GET_APPLICATION_REQUEST_FAIL;
    constructor(public payload: any) {}
}
export class ClearApplicationRequest implements Action {
    readonly type = ActionTypes.CLEAR_APPLICATION_REQUEST;
    constructor() { }
}
export type ApplicationActions = GetApplicationRequest
    | GetApplicationRequestFailure
    | GetApplicationRequestSuccess
    | ClearApplicationRequest;