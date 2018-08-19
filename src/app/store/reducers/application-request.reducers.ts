import {
    ApplicationRequestActions,
    ActionTypes
} from '../actions/application-request.actions';

export interface ApplicationRequestState {
    data: any;
    workflows: any;
    loaded: boolean;
    loading: boolean;
}

export const InitialState: ApplicationRequestState = {
    data: {},
    workflows: [],
    loaded: false,
    loading: false
}

export function reducer(
    state: ApplicationRequestState = InitialState,
    action: ApplicationRequestActions
): ApplicationRequestState {
    switch (action.type) {
        case ActionTypes.GET_APPLICATION_REQUEST: 
        return {
            ...state,
            loading: true
        }
        case ActionTypes.GET_APPLICATION_REQUEST_SUCCESS:
        return {
            ...state,
            data: action.payload,
            loaded: true,
            loading: false
        };
        case ActionTypes.GET_APPLICATION_REQUEST_WORKFLOWS_SUCCESS:
        return {
            ...state,
            workflows: action.payload
        }
        default:
            return state;
    }
}

export const getApplicaitonRequets = (state: ApplicationRequestState) => state.data;
export const getApplicationWorkflows = (state: ApplicationRequestState) => state.workflows;