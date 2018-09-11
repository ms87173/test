import { ReviewInformationTask } from "./review-information-task";

export class ReviewInformationResponse {
    taskId:string;
    workflowName:string;
    workflowDescription:string;
    status:string;
    description:string;
    tasks:ReviewInformationTask[]
   
    
}