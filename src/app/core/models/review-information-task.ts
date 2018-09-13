import { ReviewInformationSection } from "./review-information-section";

export class ReviewInformationTask {

    description: string;
    status: string;
    taskId: string;
    taskName: string;
    showEdit: boolean = false;
    sections: ReviewInformationSection[]
}