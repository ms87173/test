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
