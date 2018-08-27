import * as fromStore from '../reducers/';
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

