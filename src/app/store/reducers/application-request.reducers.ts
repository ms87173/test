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

export const getApplicaitonRequets = (state: ApplicationRequestState) => state.application;
export const getApplicationWorkflows = (state: ApplicationRequestState) => state.workflows;