import * as workflowsReducer from './workflows.reducer';
import * as applicationReducer from './application.reducer';
import * as reviewInformationReducer from './review-information.reducer';
import { ActionReducer } from 'ngx-bootstrap/mini-ngrx';
import { combineReducers } from '@ngrx/store';

export interface ApplicationRequestState {
    application: applicationReducer.ApplicationState;
    workflows: workflowsReducer.WorkflowsState;
    reviewInformation: reviewInformationReducer.ReviewInformationState;

}

export const InitialState: ApplicationRequestState = {
    application: applicationReducer.InitialState,
    workflows: workflowsReducer.InitialState,
    reviewInformation: reviewInformationReducer.InitialState
}

const reducers = {
    application: applicationReducer.applicationReducer,
    workflows: workflowsReducer.reducer,
    reviewInformation: reviewInformationReducer.reducer
}

export const reducer: ActionReducer<ApplicationRequestState> = combineReducers(reducers);

export const getApplicaitonRequestState = (state: ApplicationRequestState) => state.application;
export const getApplicationWorkflowsState = (state: ApplicationRequestState) => state.workflows;
export const getApplicationReviewInformationState = (state: ApplicationRequestState) => state.reviewInformation;
//NEED TO DISCUSS: how to set selectors in state tree. Ideally at reducer we should have state selectors
// but combining the reducer at top where will the selectors go?
export const getApplicationWorkflows = (state: ApplicationRequestState) => state.workflows.workflows;
export const getApplication = (state: ApplicationRequestState) => state.application.application;
export const getApplicationId = (state: ApplicationRequestState) => {
    if (state.application.application && state.application.application.id) {
        return state.application.application.id;
    }
    return null;
}

export const getApplicationActiveTask = (state: ApplicationRequestState) => state.workflows.activeTask;
export const getApplicationPreviousTask = (state: ApplicationRequestState) => state.workflows.previousTask;
export const getApplicationNextTask = (state: ApplicationRequestState) => state.workflows.nextTask;
export const getApplicationReviewInformationTask = (state: ApplicationRequestState) => {
    if (state.reviewInformation && state.reviewInformation.reviewInformationTask) {
        return state.reviewInformation.reviewInformationTask;
    }
    return null;
}
