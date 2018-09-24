import { ActionTypes, ReviewInformationActions } from '../actions/review-information.actions';
import { ReviewInformationResponse } from '../../core/models';

export interface ReviewInformationState {
    reviewInformationTask: ReviewInformationResponse;
}

export const InitialState: ReviewInformationState = {
    reviewInformationTask: null
};
export function reducer(
    state: ReviewInformationState = InitialState,
    action: ReviewInformationActions
): ReviewInformationState {
    switch (action.type) {
        case ActionTypes.GET_ALL_TASKS_FOR_REVIEW_INFORMATION_TASK_SUCCESS:

            return {
                ...state,
                reviewInformationTask: action.payload
            };
        case ActionTypes.GET_ALL_TASKS_FOR_REVIEW_INFORMATION_TASK_FAIL:

            return {
                ...state
            };

        default:
            return state;
    }

}
