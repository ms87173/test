import { Section } from '.';

export class SignAndSubmit {
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
