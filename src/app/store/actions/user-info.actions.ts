import { Action } from '@ngrx/store';

export enum ActionTypes {
    GET_USER = '[userFeature]  Get User',
    GET_USER_SUCCESS = '[userFeature]  Get User Success',
    GET_USER_FAIL = '[userFeature]  Get User Failure',
    GET_USER_CONTACT_PERSON = '[userFeature] Get User Contact Person',
    GET_USER_CONTACT_PERSON_SUCCESS = '[userFeature] Get User Contact Person Success',
    GET_USER_CONTACT_PERSON_FAILURE = '[userFeature] Get User Contact Person Failure',
}

export class GetUser implements Action {
    readonly type = ActionTypes.GET_USER;
    constructor() { }
}
export class GetUserSuccess implements Action {
    readonly type = ActionTypes.GET_USER_SUCCESS;
    constructor(public payload) {
        this.payload = payload;
    }
}
export class GetUserFailure implements Action {
    readonly type = ActionTypes.GET_USER_FAIL;
    constructor(public payload) {
        this.payload = payload;
    }
}
export class GetUserContactPersonSuccess implements Action {
    readonly type = ActionTypes.GET_USER_CONTACT_PERSON_SUCCESS;
    constructor(public payload) {
        this.payload = payload;
    }
}
export class GetUserContactPerson implements Action {
    readonly type = ActionTypes.GET_USER_CONTACT_PERSON;
    constructor() {
    }
}
export class GetUserContactPersonFailure implements Action {
    readonly type = ActionTypes.GET_USER_CONTACT_PERSON_FAILURE;
    constructor(public payload) {
        this.payload = payload;
    }
}

export type UserActions = GetUser
    | GetUserSuccess
    | GetUserFailure
    | GetUserContactPerson
    | GetUserContactPersonFailure
    | GetUserContactPersonSuccess;
