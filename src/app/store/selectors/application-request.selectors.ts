import * as fromStore from '../reducers';
import * as fromApplicationRequest from '../reducers/application-request.reducer';
import { createSelector } from '@ngrx/store';

export const getApplicaitonRequestState = (state: fromStore.AppState) => state.applicationRequest;

export const getApplicaitonState = createSelector(
    getApplicaitonRequestState,
    fromApplicationRequest.getApplicaitonRequestState
);

export const getApplicationWorkflowsState = createSelector(
    getApplicaitonRequestState,
    fromApplicationRequest.getApplicationWorkflowsState
);

export const getApplicationReviewInformationState = createSelector(
    getApplicaitonRequestState,
    fromApplicationRequest.getApplicationReviewInformationState
);

export const getApplicaiton = createSelector(
    getApplicaitonRequestState,
    fromApplicationRequest.getApplication
);

export const getApplicationWorkflows = createSelector(
    getApplicaitonRequestState,
    fromApplicationRequest.getApplicationWorkflows
);

export const getApplicationActiveTask = createSelector(
    getApplicaitonRequestState,
    fromApplicationRequest.getApplicationActiveTask
);
export const getApplicationPreviousTask = createSelector(
    getApplicaitonRequestState,
    fromApplicationRequest.getApplicationPreviousTask
);
export const getApplicationNextTask = createSelector(
    getApplicaitonRequestState,
    fromApplicationRequest.getApplicationNextTask
);
export const getApplicationReviewInformationTask = createSelector(
    getApplicaitonRequestState,
    fromApplicationRequest.getApplicationReviewInformationTask
);

export const getApplicaitonId = createSelector(
    getApplicaitonRequestState,
    fromApplicationRequest.getApplicationId
);
export const getSignAndSubmitTask = createSelector(
    getApplicaitonRequestState,
    fromApplicationRequest.getSignAndSubmitTask
);

export const getSignAndSubmitTaskFormlyConfig = createSelector(
    getApplicaitonRequestState,
    fromApplicationRequest.getSignAndSubmitTaskFormlyConfig
);

export const getTncReview = createSelector(
    getApplicaitonRequestState,
    fromApplicationRequest.getTncReview
);