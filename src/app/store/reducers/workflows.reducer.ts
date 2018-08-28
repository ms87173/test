import { ActionTypes, WorkflowsActions } from '../actions/workflows.action';

export interface WorkflowsState {
    workflows: any,
    activeTask: {
        workflowId: string,
        task: {
            label: string,
            description: string,
            id: string,
            status: string,
            type: string
        }
    },
    previousTask: {
        workflowId: string,
        task: {
            label: string,
            description: string,
            id: string,
            status: string,
            type: string
        }
    },
    nextTask: {
        workflowId: string,
        task: {
            label: string,
            description: string,
            id: string,
            status: string,
            type: string
        }
    },
    loaded: boolean,
    loading: boolean
}
//we can dispatch change task action and calculate all the task again.

export const InitialState: WorkflowsState = {
    workflows: [],
    activeTask: {
        workflowId: '',
        task: {
            label: '',
            description: '',
            id: '',
            status: '',
            type: ''
        }
    },
    previousTask: {
        workflowId: '',
        task: {
            label: '',
            description: '',
            id: '',
            status: '',
            type: ''
        }
    },
    nextTask: {
        workflowId: '',
        task: {
            label: '',
            description: '',
            id: '',
            status: '',
            type: ''
        }
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
                loading: false,
                workflows: action.payload
            }
        case ActionTypes.SET_ACTIVE_TASK:
            const { workflowId, taskId } = action.payload;
            //TODO: change this to key value pair
            //determine routing as well with different actions
            const workflow = state.workflows.find(e => e.id === workflowId);
            const task = workflow.task.find(e => e.id === taskId);
            return {
                ...state,
                activeTask: {
                    workflowId,
                    task
                }
            }
        default:
            return state;
    }
}

export const getWorkflows = (state: WorkflowsState) => state.workflows;
export const getWorkflowsLoaded = (state: WorkflowsState) => state.loaded;
export const getWorkflowsLoading = (state: WorkflowsState) => state.loading;
export const getActiveWorkflowTask = (state: WorkflowsState) => state.activeTask.task;
export const getActiveWorkflowTaskId = (state: WorkflowsState) => state.activeTask.task.id;