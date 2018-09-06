import { ActionTypes, WorkflowsActions } from '../actions/workflows.action';
import { workflowsSelectors } from '../selectors';

export interface WorkflowsState {
    workflows: any,
    activeTask: {
        workflowId: any,
        task: any
    },
    previousTask: {
        workflowId: any,
        task: any
    },
    nextTask: {
        workflowId: any,
        task: any
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
            if (state.workflows && state.workflows.length > 0) {
                let count1 = 0,
                    taskFound = false,
                    nextWorkflow = { id: '', tasks: []},
                    previousWorkflow = { id: '', tasks: [] },
                    currentWorkflow = { id: '', tasks: [] },
                    nextTask = {id: ''},
                    currentTask = {id: ''},
                    previousTask = {id: ''};

                const workflows = state.workflows;
                while(count1 < state.workflows.length) {
                    nextWorkflow = workflows[count1 + 1];
                    currentWorkflow = workflows[count1];
                    previousWorkflow = workflows[count1 - 1];
                    const tasks = currentWorkflow && currentWorkflow.tasks;
                    if(currentWorkflow.id === workflowId && tasks && tasks.length > 0) {
                        let count2 = 0;
                        while(count2 < tasks.length) {
                            const currentTask = tasks[count2];
                            let nextTask = tasks[count2 + 1];
                            let previousTask = tasks[count2 - 1];
                            if(currentTask.id === taskId) {
                                taskFound = true;
                                if(!nextTask) {
                                    nextTask = nextWorkflow && nextWorkflow.tasks[0];
                                }
                                if(!previousTask) {
                                    const len = previousWorkflow &&
                                        previousWorkflow.tasks &&
                                        previousWorkflow.tasks.length;
                                    previousTask = len && previousWorkflow.tasks[len-1];
                                }
                                break;
                            }
                            count2++;
                        }
                    }
                    if(taskFound) {
                        break;
                    }
                    count1++;
                }
                const activeTask = {
                    workflowId,
                    task: currentTask
                };
                const nextStateTask = {
                    workflowId: nextWorkflow && nextWorkflow.id,
                    task: nextTask
                };
                const previousStateTask = {
                    workflowId: previousWorkflow && previousWorkflow.id,
                    task: previousTask
                };
                const x= {
                    ...state,
                    activeTask,
                    previousTask: previousStateTask,
                    nextTask: nextStateTask

                }

                console.log(x)

                return {
                    ...state,
                    activeTask,
                    previousTask: previousStateTask,
                    nextTask: nextStateTask

                }
            }
            // const workflow = state.workflows.find(e => e.id === workflowId);
            // const task = workflow && workflow.tasks.find(e => e.id === taskId);
        default:
            return state;
    }
}

export const getWorkflows = (state: WorkflowsState) => state.workflows;
export const getWorkflowsLoaded = (state: WorkflowsState) => state.loaded;
export const getWorkflowsLoading = (state: WorkflowsState) => state.loading;
export const getActiveWorkflowTask = (state: WorkflowsState) => state.activeTask.task;
export const getActiveWorkflowTaskId = (state: WorkflowsState) => state.activeTask.task.id;