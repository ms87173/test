import { Section } from './section';

export class Task {
    label: string;
    description: string;
    id: string;
    status: string;
    taskId: string;
    workflowName: string;
    workflowDescription: string;
    showEdit = false;
    sections: Section[];

    constructor() {

    }

}
