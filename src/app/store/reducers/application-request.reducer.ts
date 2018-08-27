import * as workflowsReducer from './workflows.reducer';
import * as applicationReducer from './application.reducer';
import { ActionReducer } from 'ngx-bootstrap/mini-ngrx';
import { combineReducers } from '@ngrx/store';

export interface ApplicationRequestState {
    application: applicationReducer.ApplicationState;
    workflows: workflowsReducer.WorkflowsState;
}

export const InitialState: ApplicationRequestState = {
    application: applicationReducer.InitialState,
    workflows: workflowsReducer.InitialState,
}

const reducers = {
    application: applicationReducer.applicationReducer,
    workflows: workflowsReducer.reducer
}

export const reducer : ActionReducer<ApplicationRequestState> = combineReducers(reducers);

export const getApplicaitonRequestState = (state: ApplicationRequestState) => state.application;
export const getApplicationWorkflowsState = (state: ApplicationRequestState) => state.workflows;

//NEED TO DISCUSS: how to set selectors in state tree. Ideally at reducer we should have state selectors
// but combining the reducer at top where will the selectors go?
export const getApplicationWorkflows = (state: ApplicationRequestState) => state.workflows.workflows;
export const getApplication = (state: ApplicationRequestState) => state.application.application;
export const getApplicationActiveTask = (state: ApplicationRequestState) => state.workflows.activeTask;