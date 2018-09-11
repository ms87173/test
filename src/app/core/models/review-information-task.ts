import { ReviewInformationSection } from "./review-information-section";

export class ReviewInformationTask {

    description: string;
    status: string;
    taskId: string;
    workflowName: string;
    workflowDescription: string;
    sections: ReviewInformationSection[]
}