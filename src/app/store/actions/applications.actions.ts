import { Action } from '@ngrx/store';

export enum ActionTypes {
    GET_APPLICATIONS = '[App State] Get Applications',
    GET_APPLICATIONS_SUCCESS = '[App State] Get Applications Success',
    GET_APPLICATIONS_FAIL = '[App State] Get Applications Failure',
    SET_ACTIVE_APPLICATION = '[App State] Set Active Application in List',
    CLEAR_ACTIVE_APPLICATION = '[App State] Clear Active Application from List',
    SORT_APPLICATIONS = '[App State] Sort Applications',
    APPLICATIONS_SORT_SUCCESS = '[App State] Applications Sort Success'
}

export class GetApplications implements Action {
    readonly type = ActionTypes.GET_APPLICATIONS
    constructor() { }
}
export class GetApplicationsSuccess implements Action {
    readonly type = ActionTypes.GET_APPLICATIONS_SUCCESS
    constructor(public payload) {
        this.payload = payload
    }
}
export class GetApplicationsFailure implements Action {
    readonly type = ActionTypes.GET_APPLICATIONS_FAIL
    constructor(public payload) {
        this.payload = payload
    }
}
export class SetActiveApplication implements Action {
    readonly type = ActionTypes.SET_ACTIVE_APPLICATION
    constructor(public payload) {
        this.payload = payload
    }
}
export class ClearActiveApplication implements Action {
    readonly type = ActionTypes.CLEAR_ACTIVE_APPLICATION
    constructor() { }
}
export class SortApplications implements Action {
    readonly type = ActionTypes.SORT_APPLICATIONS
    constructor(public payload) {
        this.payload = payload
    }
}
export class SortApplicationsSuccess implements Action {
    readonly type = ActionTypes.APPLICATIONS_SORT_SUCCESS
    constructor(public payload) {
        this.payload = payload
    }
}
export type ApplicationActions = GetApplications
    | GetApplicationsSuccess
    | GetApplicationsFailure
    | SetActiveApplication
    | ClearActiveApplication
    | SortApplications
    | SortApplicationsSuccess;