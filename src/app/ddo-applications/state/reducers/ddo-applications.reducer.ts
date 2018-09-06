import {
    ActionTypes,
    ApplicationActions
} from '../actions/ddo-applications.actions';
import { ApplicationInterface } from '../../../core/models/application.interface';

export interface ApplicationsState {
    applications: Array<ApplicationInterface>;
    loaded: boolean;
    loading: boolean;
}

export const InitialState: ApplicationsState = {
    applications: [],
    loaded: false,
    loading: false
};
export function ApplicationsReducer(
    state: ApplicationsState = InitialState,
    action: ApplicationActions
): ApplicationsState {
    switch (action.type) {
        case ActionTypes.GET_APPLICATIONS: 
            return {
                ...state,
                loaded: false,
                loading: true
            };
        case ActionTypes.GET_APPLICATIONS_SUCCESS:
            return {
                loaded: true,
                loading: false,
                applications: action.payload
            };
        case ActionTypes.GET_APPLICATIONS_FAIL:
            return {
                ...state,
                loaded: false,
                loading: false
            };
        default:
            return state;
    }
}

export const getApplications = (state: ApplicationsState) => state.applications;
export const getApplicationLoaded = (state: ApplicationsState) => state.loaded;
export const getApplicationLoading = (state: ApplicationsState) => state.loading;
