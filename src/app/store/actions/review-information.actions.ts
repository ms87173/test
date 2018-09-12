import { Action } from '@ngrx/store';
import { Task, ReviewInformationResponse, ReviewInformationRequest } from '../../core/models';

export enum ActionTypes {

    GET_ALL_TASKS_FOR_REVIEW_INFORMATION_TASK = '[App State] Get All Tasks For Review Information Task',
    GET_ALL_TASKS_FOR_REVIEW_INFORMATION_TASK_SUCCESS = '[App State] Get All Tasks For Review Information Task Success',
    GET_ALL_TASKS_FOR_REVIEW_INFORMATION_TASK_FAIL = '[App State] Get All Tasks For Review Information Task Failure'

}

export class GetAllTasksForReviewInformationTask implements Action {
    readonly type = ActionTypes.GET_ALL_TASKS_FOR_REVIEW_INFORMATION_TASK;
    constructor(public payload: ReviewInformationRequest) {
        this.payload = payload;
    }
}
export class GetAllTasksForReviewInformationTaskSuccess implements Action {
    readonly type = ActionTypes.GET_ALL_TASKS_FOR_REVIEW_INFORMATION_TASK_SUCCESS;
    constructor(public payload: ReviewInformationResponse) {
        this.payload = payload;
    }
}
export class GetAllTasksForReviewInformationTaskFailure implements Action {
    readonly type = ActionTypes.GET_ALL_TASKS_FOR_REVIEW_INFORMATION_TASK_FAIL;
    constructor(public payload: any) {
        this.payload = payload;
    }
}

export type ReviewInformationActions = GetAllTasksForReviewInformationTask
    | GetAllTasksForReviewInformationTaskSuccess
    | GetAllTasksForReviewInformationTaskFailure;
