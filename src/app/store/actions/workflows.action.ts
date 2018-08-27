import { Action } from '@ngrx/store';

export enum ActionTypes {
    GET_APPLICATION_REQUEST_WORKFLOWS = '[App State] Get Application Request Workflows',
    GET_APPLICATION_REQUEST_WORKFLOWS_SUCCESS = '[App State] Get Application Request Workflows Success',
    GET_APPLICATION_REQUEST_WORKFLOWS_FAILURE = '[App State] Get Application Request Workflows Failure',
    DETERMINE_PENDING_TASK_OF_APPLICATION_REQUEST = '[App State] Determine pending task of application request',
    DETERMINE_PENDING_WORKFLOW_OF_APPLICATION_REQUEST = '[App State] Determine pending workflow of application request',
    GET_APPLICATION_REQUEST_TASK = '[App State] Get Application request task',
    GET_APPLICATION_REQUEST_TASK_SUCCESS = '[App State] Get Application request task success',
    GET_APPLICATION_REQUEST_TASK_FAILURE = '[App State] Get Application request task failure'    
    // SET_APPLICATION_REQUEST_TASK = '[App State] Select Application request task',
    // BUILD_NAVIGATION_CONFIG = '[Some State] Build Navigation Config',
    // SELECT_NAVIGATION_ITEM = '[Some State] Select Navigation Item',
}

export class GetApplicationRequestWorkflows implements Action {
    readonly type = ActionTypes.GET_APPLICATION_REQUEST_WORKFLOWS;
    constructor(public payload) {
        this.payload = payload;
    }
}

export class GetApplicationRequestWorkflowsSuccess implements Action {
    readonly type = ActionTypes.GET_APPLICATION_REQUEST_WORKFLOWS_SUCCESS;
    constructor(public payload) {
        this.payload = payload;
    }
}

export class GetApplicationRequestWorkflowsFailure implements Action {
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
export class GetApplicationRequestTask implements Action {
    readonly type = ActionTypes.GET_APPLICATION_REQUEST_TASK;
    constructor(public payload) {
        this.payload = payload;
    }
}
export class GetApplicationRequestTaskSuccess implements Action {
    readonly type = ActionTypes.GET_APPLICATION_REQUEST_TASK_SUCCESS;
    constructor(public payload) {
        this.payload = payload;
    }
}
export class GetApplicationRequestTaskFailure implements Action {
    readonly type = ActionTypes.GET_APPLICATION_REQUEST_TASK_FAILURE;
    constructor(public payload) {
        this.payload = payload;
    }
}
export type WorkflowsActions = GetApplicationRequestTask
    | GetApplicationRequestTaskFailure
    | GetApplicationRequestTaskSuccess
    | DeterminePendingTaskOfApplication
    | GetApplicationRequestWorkflows
    | GetApplicationRequestWorkflowsFailure
    | GetApplicationRequestWorkflowsSuccess;