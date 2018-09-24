import { ReviewInformationWorkflow } from './review-information-workflow';

export class ReviewInformationResponse {
    taskId: string;
    workflowName: string;
    workflowDescription: string;
    status: string;
    description: string;
    workflows: ReviewInformationWorkflow[];


}
