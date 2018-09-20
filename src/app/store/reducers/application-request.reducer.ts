import * as workflowsReducer from './workflows.reducer';
import * as applicationReducer from './application.reducer';
import * as reviewInformationReducer from './review-information.reducer';
import * as signAndSubmitReducer from './sign-and-submit.reducer'
import { ActionReducer } from 'ngx-bootstrap/mini-ngrx';
import { combineReducers } from '@ngrx/store';

export interface ApplicationRequestState {
    application: applicationReducer.ApplicationState;
    workflows: workflowsReducer.WorkflowsState;
    reviewInformation: reviewInformationReducer.ReviewInformationState;
    signAndSubmit: signAndSubmitReducer.SignAndSubmitState
}

export const InitialState: ApplicationRequestState = {
    application: applicationReducer.InitialState,
    workflows: workflowsReducer.InitialState,
    reviewInformation: reviewInformationReducer.InitialState,
    signAndSubmit: signAndSubmitReducer.InitialState
};

const reducers = {
    application: applicationReducer.applicationReducer,
    workflows: workflowsReducer.reducer,
    reviewInformation: reviewInformationReducer.reducer,
    signAndSubmit: signAndSubmitReducer.reducer
};

export const reducer: ActionReducer<ApplicationRequestState> = combineReducers(reducers);

export const getApplicaitonRequestState = (state: ApplicationRequestState) => state.application;
export const getApplicationWorkflowsState = (state: ApplicationRequestState) => state.workflows;
export const getApplicationReviewInformationState = (state: ApplicationRequestState) => state.reviewInformation;

export const getApplicationWorkflows = (state: ApplicationRequestState) => state.workflows.workflows;
export const getApplication = (state: ApplicationRequestState) => state.application.application;
export const getApplicationId = (state: ApplicationRequestState) => {
    if (state.application.application && state.application.application.id) {
        return state.application.application.id;
    }
    return null;
};

export const getApplicationActiveTask = (state: ApplicationRequestState) => state.workflows.activeTask;
export const getApplicationPreviousTask = (state: ApplicationRequestState) => state.workflows.previousTask;
export const getApplicationNextTask = (state: ApplicationRequestState) => state.workflows.nextTask;
export const getApplicationReviewInformationTask = (state: ApplicationRequestState) => {
    if (state.reviewInformation && state.reviewInformation.reviewInformationTask) {
        return state.reviewInformation.reviewInformationTask;
    }
    return null;
};
export const getSignAndSubmitTask = (state: ApplicationRequestState) => {
    if (state.signAndSubmit && state.signAndSubmit.signAndSubmitTask) {

        return state.signAndSubmit.signAndSubmitTask;

    }
    return null

}

export const getSignAndSubmitTaskFormlyConfig = (state: ApplicationRequestState) => {
    if (state.signAndSubmit && state.signAndSubmit.signAndSubmitTaskFormlyConfig) {

        return state.signAndSubmit.signAndSubmitTaskFormlyConfig;

    }
    return [];

}
export const getTncReview = (state: ApplicationRequestState) => {
    if (state.signAndSubmit && state.signAndSubmit.tncReview !== null) {

        return state.signAndSubmit.tncReview;

    }
    return null;

}

export const getAgreeAndSubmitMode = (state: ApplicationRequestState) => {
    if (state.signAndSubmit && state.signAndSubmit.agreeAndSubmitMode !== null) {

        return state.signAndSubmit.agreeAndSubmitMode;

    }
    return null;

}


export const getSignAndSubmitQuestionId = (state: ApplicationRequestState) => {
    if (state.signAndSubmit && state.signAndSubmit.signAndSubmitQuestionId !== null) {

        return state.signAndSubmit.signAndSubmitQuestionId;
    }
    return null;

}