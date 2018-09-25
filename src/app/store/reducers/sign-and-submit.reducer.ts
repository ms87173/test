import { Task,
    SignAndSubmitDeltaResponse,
    SignAndSubmitDeltaError,
    SignAndSubmit,
    FormlyFieldConfigArrayCollection } from '../../core/models';
import { ActionTypes, SignAndSubmitActions } from '../actions/sign-and-submit.actions';
import { FormlyFieldConfig } from '@ngx-formly/core';


export interface SignAndSubmitState {
    signAndSubmitTask: SignAndSubmit;
    signAndSubmitTaskFormlyConfig: FormlyFieldConfigArrayCollection[];
    tncReview: boolean;
    agreeAndSubmitMode: boolean;
    readonly signAndSubmitQuestionId: string;

}

export const InitialState: SignAndSubmitState = {
    signAndSubmitTask: null,
    signAndSubmitTaskFormlyConfig: [],
    tncReview: null,
    agreeAndSubmitMode: null,
    signAndSubmitQuestionId: null

};

export function reducer(
    state: SignAndSubmitState = InitialState,
    action: SignAndSubmitActions
): SignAndSubmitState {

    switch (action.type) {
        case ActionTypes.GET_SIGN_AND_SUBMIT_TASK_SUCCESS:
            return {
                ...state,
                signAndSubmitTask: action.payload
            };

        case ActionTypes.GET_SIGN_AND_SUBMIT_TASK_FAIL:
            return {
                ...state
            };

        case ActionTypes.GET_SIGN_AND_SUBMIT_TASK_FORMLY_CONFIG_SUCCESS:
            return {
                ...state,
                signAndSubmitTaskFormlyConfig: action.payload

            };

            case ActionTypes.SET_TNC_REVIEW:
            return {
                ...state,
                tncReview: action.payload

            };
            case ActionTypes.SET_AGREE_SUBMIT_MODE:
            return {
                ...state,
                agreeAndSubmitMode: action.payload
            };
            case ActionTypes.SET_SIGN_AND_SUBMIT_QUESTION_ID:
            return {
                ...state,
                signAndSubmitQuestionId: action.payload
            };
        default:
            return state;
    }

}

