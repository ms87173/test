import { ActionTypes, WorkflowsActions } from '../actions/workflows.action';

export interface WorkflowsState {
    workflows: any;
    activeTask: {
        workflowId: any,
        task: any
    };
    previousTask: {
        workflowId: any,
        task: any
    };
    nextTask: {
        workflowId: any,
        task: any
    };
    firstTaskId: string;
    lastTaskId: string;
    loaded: boolean;
    loading: boolean;
}

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
    firstTaskId: '',
    lastTaskId: '',
    loaded: false,
    loading: false
};

export function reducer(
    state: WorkflowsState = InitialState,
    action: WorkflowsActions
): WorkflowsState {
    switch (action.type) {
        case ActionTypes.GET_APPLICATION_REQUEST_WORKFLOWS_SUCCESS:
            const { workflows, lastTaskId, firstTaskId } = action.payload;
            return {
                ...state,
                workflows,
                lastTaskId,
                firstTaskId,
                loaded: true,
                loading: false
            };
        case ActionTypes.SET_ACTIVE_TASK:
            const { workflowId, taskId } = action.payload;
            if (state.workflows && state.workflows.length > 0) {
                let count1 = 0,
                    taskFound = false,
                    nextWorkflow = { id: '', tasks: [] },
                    previousWorkflow = { id: '', tasks: [] },
                    currentWorkflow = { id: '', tasks: [] },
                    nextTask = { id: '' },
                    currentTask = { id: '' },
                    previousTask = { id: '' };

                const workflows = state.workflows;
                while (count1 < workflows.length) {
                    nextWorkflow = workflows[count1 + 1] || '';
                    currentWorkflow = workflows[count1];
                    previousWorkflow = workflows[count1 - 1] || '';
                    const tasks = currentWorkflow && currentWorkflow.tasks;
                    if (currentWorkflow.id === workflowId && tasks && tasks.length > 0) {
                        let count2 = 0;
                        while (count2 < tasks.length) {
                            currentTask = tasks[count2];
                            nextTask = tasks[count2 + 1];
                            previousTask = tasks[count2 - 1];
                            if (currentTask.id === taskId) {
                                taskFound = true;
                                if (!nextTask) {
                                    nextTask = nextWorkflow && nextWorkflow.tasks[0]
                                } else {
                                    nextWorkflow = currentWorkflow;
                                }
                                if (!previousTask) {
                                    const len = previousWorkflow &&
                                        previousWorkflow.tasks &&
                                        previousWorkflow.tasks.length;
                                    previousTask = len && previousWorkflow.tasks[len - 1];
                                } else {
                                    previousWorkflow = currentWorkflow;
                                }
                                break;
                            }
                            count2++;
                        }
                    }
                    if (taskFound) {
                        break;
                    }
                    count1++;
                }
                const activeTask = {
                    workflowId,
                    task: currentTask
                };
                const nextStateTask = {
                    workflowId: (nextWorkflow && nextWorkflow.id) || '',
                    task: nextTask ||
                        {
                            label: '',
                            description: '',
                            id: '',
                            status: '',
                            type: ''
                        }
                };
                const previousStateTask = {
                    workflowId: (previousWorkflow && previousWorkflow.id) || '',
                    task: previousTask ||
                        {
                            label: '',
                            description: '',
                            id: '',
                            status: '',
                            type: ''
                        }
                };
                // const x = {
                //     ...state,
                //     activeTask,
                //     previousTask: previousStateTask,
                //     nextTask: nextStateTask

                // };
                // console.log(x);
                return {
                    ...state,
                    activeTask,
                    previousTask: previousStateTask,
                    nextTask: nextStateTask
                };
            }
            break;
        default:
            return state;
    }
}

export const getWorkflows = (state: WorkflowsState) => state.workflows;
export const getWorkflowsLoaded = (state: WorkflowsState) => state.loaded;
export const getWorkflowsLoading = (state: WorkflowsState) => state.loading;
export const getActiveWorkflowTask = (state: WorkflowsState) => state.activeTask.task;
export const getActiveWorkflowTaskId = (state: WorkflowsState) => state.activeTask.task.id;
export const getPreviousWorkflowTask = (state: WorkflowsState) => state.previousTask.task;
export const getPreviousWorkflowTaskId = (state: WorkflowsState) => state.previousTask.task.id;
export const getNextWorkflowTask = (state: WorkflowsState) => state.nextTask.task;
export const getNextWorkflowTaskId = (state: WorkflowsState) => state.nextTask.task.id;
export const getLastTaskId = (state: WorkflowsState) => state.lastTaskId;
export const getFirstTaskId = (state: WorkflowsState) => state.firstTaskId;
