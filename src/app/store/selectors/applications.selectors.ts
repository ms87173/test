import * as fromStore from '../reducers/';
import * as fromApplications from '../reducers/applications.reducers';
import { createSelector } from '@ngrx/store';

export const getApplicaitonsState = (state: fromStore.AppState) => state.applications;

export const getApplicaitons = createSelector(
    getApplicaitonsState,
    fromApplications.getApplicaitons
);

export const getApplicationsIsLoaded = createSelector(
    getApplicaitonsState,
    fromApplications.getApplicationsIsLoaded
);
export const getSelectedApplicationId = createSelector(
    getApplicaitonsState,
    fromApplications.getSelectedApplicationId
);
export const getSelectedApplication = createSelector(
    getApplicaitonsState,
    fromApplications.getSelectedApplication
);