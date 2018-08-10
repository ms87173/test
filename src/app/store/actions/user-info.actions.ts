import { Action } from '@ngrx/store';

export enum ActionTypes {
    GET_USER = "[userFeature]  Get User",
    GET_USER_SUCCESS = "[userFeature]  Get User Success",
    GET_USER_FAIL = "[userFeature]  Get User Failure",
}

export class GetUser implements Action {
    readonly type = ActionTypes.GET_USER
    constructor() {}
}

export class GetUserSuccess implements Action {
    readonly type = ActionTypes.GET_USER_SUCCESS
    constructor(public payload) {
        this.payload = payload
    }
}

export class GetUserFailure implements Action {
    readonly type = ActionTypes.GET_USER_FAIL
    constructor(public payload) {
        this.payload = payload
    }
}

export type UserActions = GetUser
    | GetUserSuccess
    | GetUserFailure;