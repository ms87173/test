import * as fromStore from "../reducers/";
import * as fromApplicationRequest from '../reducers/application-request.reducers';
import { createSelector } from "@ngrx/store";

export const getApplicaitonRequestState = (state: fromStore.AppState) => state.applicationRequest;

export const getApplicaitonRequest = createSelector(
    getApplicaitonRequestState,
    fromApplicationRequest.getApplicaitonRequets
);

export const getApplicationRequestWorkflows = createSelector(
    getApplicaitonRequestState,
    fromApplicationRequest.getApplicationWorkflows
);