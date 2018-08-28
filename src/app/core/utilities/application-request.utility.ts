import { TASKS_STATUSES } from "../constants/application-request.constants";
import { of } from "rxjs";

export function determinePendingTask(workflows) {
    let pendingTask = false, count = 0, taskId = null, workflowId = null;
    while(count < workflows.length) {
        const workflow = workflows[count];
        if (workflow.status === TASKS_STATUSES.pending) {
            workflowId = workflow.id;
            let count1 = 0;
            while(count1 < workflow.tasks.length) {
                const task = workflow.tasks[count1];
                if (task.status === TASKS_STATUSES.pending) {
                    taskId = task.id;
                    pendingTask = true;
                    break;
                }
                count1++;
            }
            break;
        }
        count++;
    }
    return of({
        workflowId,
        taskId
    });
}