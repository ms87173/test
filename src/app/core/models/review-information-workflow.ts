import { ReviewInformationTask } from "src/app/core/models";

export class ReviewInformationWorkflow {
    workflowId: string;
    workflowName: string;
    workflowDescription: string;
    tasks:ReviewInformationTask[]

}