import { Action } from '@ngrx/store';

export enum ActionTypes {
    GET_APPLICATION_REQUEST = '[App State] Get Application Request',
    GET_APPLICATION_REQUEST_SUCCESS = '[App State] Get Application Request Success',
    GET_APPLICATION_REQUEST_FAIL = '[App State] Get Application Request Failure',
    CLEAR_APPLICATION_REQUEST = '[App State] Clear Application Request',
    CANCEL_APPLICATION_REQUEST = '[App State] Cancel Application Request',

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
    constructor(public payload: any) { }
}
export class ClearApplicationRequest implements Action {
    readonly type = ActionTypes.CLEAR_APPLICATION_REQUEST;
    constructor() { }
}
export class CancelApplicationRequest implements Action {
    readonly type = ActionTypes.CANCEL_APPLICATION_REQUEST;
    constructor(public payload: any) { }
}
export type ApplicationActions = GetApplicationRequest
    | GetApplicationRequestFailure
    | GetApplicationRequestSuccess
    | ClearApplicationRequest
    | CancelApplicationRequest;
