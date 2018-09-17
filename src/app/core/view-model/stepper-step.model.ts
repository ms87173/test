import { TASK_STATUSES } from '../constants/application-request.constants';
import {
    GROUP_TYPE_ICON_CLASS,
    STATUS_STEPPER_MAPPING
} from '../constants/application-request-dashboard.constants';

export interface Step {
    name: string;
    status: string;
    showLine: boolean;
    iconClass: string;
    stepCssClass: string;
    statusIconClass: string;
    disabled: boolean;
    lineCssClass: string;
    tooltipItems: string[];
    showTooltip: boolean;
    routingInformation: {
        workflowId: string,
        taskId: string
    };
    descriptionCssClass: string;
}
export class StepViewModel implements Step {
    name: string;
    status: string;
    showLine: boolean;
    iconClass: string;
    stepCssClass: string;
    statusIconClass: string;
    tooltipItems: string[];
    disabled: boolean;
    lineCssClass: string;
    showTooltip: boolean;
    routingInformation: {
        workflowId: string,
        taskId: string
    };
    descriptionCssClass: string;
    constructor(data) {
        if (data === null) {
            return data;
        }
        this.name = data.name;
        this.showLine = data.showLine;
        this.status = this.determineStatus(data.workflows);
        this.iconClass = GROUP_TYPE_ICON_CLASS[`${data.type}`];
        const statusMapping = STATUS_STEPPER_MAPPING[`${this.status}`];
        this.stepCssClass = statusMapping.stepCssClass;
        this.disabled = statusMapping.disabled;
        this.stepCssClass = statusMapping.stepCssClass;
        this.lineCssClass = statusMapping.lineCssClass;
        this.statusIconClass = statusMapping.statusIconClass;
        this.descriptionCssClass = statusMapping.descriptionCssClass;
        this.tooltipItems = this.determineTooltipItems(data.workflows);
        this.showTooltip = data.workflows && data.workflows.length > 0;
        this.routingInformation = this.determineRoutingInformation(data.workflows, this.status);
    }
    determineStatus(workflows: Array<any>) {
        const workflowStatusSet = new Set();
        workflows.forEach(element => {
            workflowStatusSet.add(element.status);
        });
        if (workflowStatusSet.has(TASK_STATUSES.inProgress)) {
            return TASK_STATUSES.inProgress;
        } else if (workflowStatusSet.has(TASK_STATUSES.completed)) {
            return TASK_STATUSES.completed;
        } else if (workflowStatusSet.has(TASK_STATUSES.onHold)) {
            return TASK_STATUSES.onHold;
        } else {
            return TASK_STATUSES.disabled;
        }
    }
    determineTooltipItems(workflows: Array<any>) {
        const arr = [];
        workflows.forEach(workflow => {
            workflow.tasks.forEach(task => arr.push(task.label));
        });
        return arr;
    }
    determineRoutingInformation(workflows: Array<any>, status) {
        switch (status) {
            case TASK_STATUSES.completed: return {
                workflowId: (workflows[0] && workflows[0].id) || '',
                taskId: (workflows[0] && workflows[0].tasks[0] && workflows[0].tasks[0].id) || ''
            };
            case TASK_STATUSES.inProgress:
                let i = 0, task = { id: '' };
                while (i < workflows.length) {
                    task = workflows[i] &&
                        workflows[i].tasks.find(e => e.status === TASK_STATUSES.inProgress);
                    if (task) {
                        break;
                    } else {
                        i++;
                    }
                }
                const workflowId = (workflows[i] && workflows[i].id) || '';
                const taskId = (task && task.id) || '';
                return {
                    workflowId,
                    taskId
                };
            case TASK_STATUSES.onHold:
                return {
                    workflowId: (workflows[0] && workflows[0].id) || '',
                    taskId: (workflows[0] && workflows[0].tasks[0] && workflows[0].tasks[0].id) || ''
                };
            case TASK_STATUSES.disabled:
            default: return {
                workflowId: '',
                taskId: ''
            };
        }
    }
}
