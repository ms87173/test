import { TASK_STATUSES } from '../constants/application-request.constants';

export function determinePendingTask(workflows) {
    let count = 0, taskId = '', workflowId = '';
    while (count < workflows.length) {
        const workflow = workflows[count];
        if (workflow.status === TASK_STATUSES.inProgress) {
            workflowId = workflow.id;
            let count1 = 0;
            while (count1 < workflow.tasks.length) {
                const task = workflow.tasks[count1];
                if (task.status === TASK_STATUSES.inProgress) {
                    taskId = task.id;
                    break;
                }
                count1++;
            }
            break;
        }
        count++;
    }
    if (workflows && workflows.length > 0 && !workflowId && !taskId) {
        workflowId = workflows[0].id;
        taskId = workflows[0].tasks[0].id;
    }
    return {
        workflowId,
        taskId
    };
}
// TODO: to determine next, back task details for side navigation.
export function changeActiveTaskConclusion(
    workflowId: string,
    taskId: string,
    workflows: Array<any>
) {
    let count1 = 0,
        taskFound = false,
        nextWorkflow = { id: '', tasks: [] },
        previousWorkflow = { id: '', tasks: [] },
        currentWorkflow = { id: '', tasks: [] },
        nextTask = { id: '' },
        currentTask = { id: '' },
        previousTask = { id: '' };
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
                        nextTask = nextWorkflow && nextWorkflow.tasks[0];
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
    return {
        activeTask,
        previousTask: previousStateTask,
        nextTask: nextStateTask
    };
}
