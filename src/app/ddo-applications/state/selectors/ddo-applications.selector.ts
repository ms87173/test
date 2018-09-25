import * as fromRoot from '../reducers';
import * as fromApplications from '../reducers/ddo-applications.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const getApplicationsFeatureState = createFeatureSelector<fromRoot.State>('ddoApplicationsFeature');

export const getApplicationsState = createSelector(
    getApplicationsFeatureState,
    (state: fromRoot.State) => state.applications
);

export const getApplications = createSelector(
    getApplicationsState,
    fromApplications.getApplications
);

export const sortApplications = createSelector(
    getApplicationsState,
    fromApplications.modifyApplicationsList
);
export const filterApplications = createSelector(
    getApplicationsState,
    fromApplications.modifyApplicationsList
);
