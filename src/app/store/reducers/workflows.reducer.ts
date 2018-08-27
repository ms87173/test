import { ActionTypes, WorkflowsActions } from '../actions/workflows.action';
import { Action } from 'rxjs/internal/scheduler/Action';

export interface WorkflowsState {
    workflows: any,
    activeTask: {
        workflowId: string,
        taskId: string
    },
    previousTask: {
        workflowId: string,
        taskId: string
    },
    nextTask: {
        workflowId: string,
        taskId: string
    },
    loaded: boolean,
    loading: boolean
}
//we can dispatch change task action and calculate all the task again.

export const InitialState: WorkflowsState = {
    workflows: [],
    activeTask: {
        workflowId: null,
        taskId: null
    },
    previousTask: {
        workflowId: null,
        taskId: null
    },
    nextTask: {
        workflowId: null,
        taskId: null
    },
    loaded: false,
    loading: false
}

export function reducer(
    state: WorkflowsState = InitialState,
    action: WorkflowsActions
): WorkflowsState {
    switch (action.type) {
        case ActionTypes.GET_APPLICATION_REQUEST_WORKFLOWS_SUCCESS:
            return {
                ...state,
                loaded: true,
                loading: true,
                workflows: action.payload
            }
        case ActionTypes.SET_ACTIVE_TASK:
            const {workflowId, taskId} = action.payload;
            return {
                ...state,
                activeTask: {
                    workflowId,
                    taskId
                }
            }
        default:
            return state;
    }
}

export const getWorkflows = (state: WorkflowsState) => state.workflows;
export const getWorkflowsLoaded = (state: WorkflowsState) => state.loaded;
export const getWorkflowsLoading = (state: WorkflowsState) => state.loading;
export const getActiveWorkflowId = (state: WorkflowsState) => state.activeTask.workflowId;
export const getActiveWorkflowTaskId = (state: WorkflowsState) => state.activeTask.taskId