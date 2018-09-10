import * as fromRoot from '../reducers';
import * as fromApplications from '../reducers/ddo-applications.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const getApplicationsFeatureState = createFeatureSelector<fromRoot.State>('ddoApplicationsFeature');

export const getApplicaitonsState = createSelector(
    getApplicationsFeatureState,
    (state: fromRoot.State) => state.applications
);

export const getApplications = createSelector(
    getApplicaitonsState,
    fromApplications.getApplications
);

export const modifyApplications = createSelector(
    getApplicaitonsState,
    fromApplications.modifyApplications
);
