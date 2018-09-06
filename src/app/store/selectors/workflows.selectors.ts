import * as fromStore from '../reducers';
import * as fromWorkflows from '../reducers/workflows.reducer';
import { createSelector } from '@ngrx/store';

export const getWorkflowsState =
    (state: fromStore.AppState) => state.applicationRequest.workflows;

export const getWorkflows = createSelector(
    getWorkflowsState,
    fromWorkflows.getWorkflows
);

export const getActiveWorkflowTask = createSelector(
    getWorkflowsState,
    fromWorkflows.getActiveWorkflowTask
);

export const getActiveWorkflowTaskId = createSelector(
    getWorkflowsState,
    fromWorkflows.getActiveWorkflowTaskId
);
export const getPreviousWorkflowTask = createSelector(
    getWorkflowsState,
    fromWorkflows.getPreviousWorkflowTask
);

export const getPreviousWorkflowTaskId = createSelector(
    getWorkflowsState,
    fromWorkflows.getPreviousWorkflowTaskId
);
export const getNextWorkflowTask = createSelector(
    getWorkflowsState,
    fromWorkflows.getNextWorkflowTask
);

export const getNextWorkflowTaskId = createSelector(
    getWorkflowsState,
    fromWorkflows.getNextWorkflowTaskId
);

export const getWorkflowsLoaded = createSelector(
    getWorkflowsState,
    fromWorkflows.getWorkflowsLoaded
);

export const getWorkflowsLoading = createSelector(
    getWorkflowsState,
    fromWorkflows.getWorkflowsLoading
);
