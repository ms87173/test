import { Action } from '@ngrx/store';

export enum ActionTypes {
    GET_APPLICATION_REQUEST_WORKFLOWS = '[App State] Get Application Request Workflows',
    GET_APPLICATION_REQUEST_WORKFLOWS_SUCCESS = '[App State] Get Application Request Workflows Success',
    GET_APPLICATION_REQUEST_WORKFLOWS_FAILURE = '[App State] Get Application Request Workflows Failure',
    DETERMINE_PENDING_TASK_OF_APPLICATION_REQUEST = '[App State] Determine pending task of application request',
    GET_APPLICATION_REQUEST_TASK = '[App State] Get Application request task',
    GET_APPLICATION_REQUEST_TASK_SUCCESS = '[App State] Get Application request task success',
    GET_APPLICATION_REQUEST_TASK_FAILURE = '[App State] Get Application request task failure',
    SET_ACTIVE_TASK = '[App State] Set Active Task',
    SET_APPLICATION_REQUEST_ACTIVE_TASK = '[App State] Select Application Request Active task',
    // BUILD_NAVIGATION_CONFIG = '[Some State] Build Navigation Config',
    // SELECT_NAVIGATION_ITEM = '[Some State] Select Navigation Item',
    // TODO: review the names
    SAVE_EXIT_REQUEST_ACTIVE_TASK = '[App State] Save Application Request Task And Exit',
    SAVE_NEXT_REQUEST_ACTIVE_TASK = '[App State] Save Application Request Task And Next'
}

export class GetApplicationWorkflows implements Action {
    readonly type = ActionTypes.GET_APPLICATION_REQUEST_WORKFLOWS;
    constructor(public payload) {
        this.payload = payload;
    }
}

export class GetApplicationWorkflowsSuccess implements Action {
    readonly type = ActionTypes.GET_APPLICATION_REQUEST_WORKFLOWS_SUCCESS;
    constructor(public payload) {
        this.payload = payload;
    }
}

export class GetApplicationWorkflowsFailure implements Action {
    readonly type = ActionTypes.GET_APPLICATION_REQUEST_WORKFLOWS_FAILURE;
    constructor(public payload) {
        this.payload = payload;
    }
}
export class DeterminePendingTaskOfApplication implements Action {
    readonly type = ActionTypes.DETERMINE_PENDING_TASK_OF_APPLICATION_REQUEST;
    constructor(public payload) {
        this.payload = payload;
     }
}
export class GetApplicationTask implements Action {
    readonly type = ActionTypes.GET_APPLICATION_REQUEST_TASK;
    constructor(public payload) {
        this.payload = payload;
    }
}
export class GetApplicationTaskSuccess implements Action {
    readonly type = ActionTypes.GET_APPLICATION_REQUEST_TASK_SUCCESS;
    constructor(public payload) {
        this.payload = payload;
    }
}
export class GetApplicationTaskFailure implements Action {
    readonly type = ActionTypes.GET_APPLICATION_REQUEST_TASK_FAILURE;
    constructor(public payload) {
        this.payload = payload;
    }
}
export class SetActiveTask implements Action {
    readonly type = ActionTypes.SET_ACTIVE_TASK;
    constructor(public payload) {
        this.payload = payload;
    }
}
export class SaveActiveTaskAndExit implements Action {
    readonly type = ActionTypes.SAVE_EXIT_REQUEST_ACTIVE_TASK;
    constructor(public payload) {
        this.payload = payload;
    }
}
export class SaveActiveTaskAndNext implements Action {
    readonly type = ActionTypes.SAVE_NEXT_REQUEST_ACTIVE_TASK;
    constructor(public payload) {
        this.payload = payload;
    }
}

export type WorkflowsActions = GetApplicationTask
    | GetApplicationTaskFailure
    | GetApplicationTaskSuccess
    | DeterminePendingTaskOfApplication
    | GetApplicationWorkflows
    | GetApplicationWorkflowsFailure
    | GetApplicationWorkflowsSuccess
    | SetActiveTask
    | SaveActiveTaskAndExit
    | SaveActiveTaskAndNext;
