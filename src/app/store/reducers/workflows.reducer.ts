import { ActionTypes, WorkflowsActions } from '../actions/workflows.action';

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
        // case ActionTypes.SET_ACTIVE_APPLICATION:
        //     const id = action.payload;
        //     let applications = [];
        //     applications = state.applications.map(e =>{
        //         e.active = e.id === id
        //         return e
        //     });
        //     return {
        //         ...state,
        //         applications
        //     };
        // case ActionTypes.GET_APPLICATION_REQUEST_WORKFLOWS_FAIL:
        default:
            return state;
    }
}

export const getWorkflows = (state: WorkflowsState) => state.workflows;
export const getWorkflowsLoaded = (state: WorkflowsState) => state.loaded;
export const getWorkflowsLoading = (state: WorkflowsState) => state.loading;
export const getActiveWorkflow = (state: WorkflowsState) => state.workflows.filter(e => e.active);
export const getActiveWorkflowTask = (state: WorkflowsState) => {
    const application = state.workflows.find(e => e.active);
    return application ? application.id : null;
};