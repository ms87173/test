import { ApplicationActions, ActionTypes } from '../actions/application.actions';

export interface ApplicationState {
    application: any;
    loaded: boolean;
    loading: boolean;
}

export const InitialState: ApplicationState = {
    application: {},
    loaded: false,
    loading: false
}

export function applicationReducer(
    state: ApplicationState = InitialState,
    action: ApplicationActions
): ApplicationState {
    switch (action.type) {
        case ActionTypes.GET_APPLICATION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.GET_APPLICATION_REQUEST_SUCCESS:
            return {
                ...state,
                application: action.payload,
                loaded: true,
                loading: false
            };
        default:
            return state;
    }
}

export const getApplicaitonRequets = (state: ApplicationState) => state.application;
export const getApplicationLoaded = (state: ApplicationState) => state.loaded;
export const getApplicationLoading = (state: ApplicationState) => state.loading;
