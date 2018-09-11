import {
    ActionTypes,
    ApplicationActions
} from '../actions/ddo-applications.actions';
import { ApplicationInterface } from '../../../core/models/application.interface';

export interface ApplicationsState {
    applications: Array<ApplicationInterface>;
    modifiedApplications: Array<ApplicationInterface>
    loaded: boolean;
    loading: boolean;
}

export const InitialState: ApplicationsState = {
    applications: [],
    modifiedApplications: [],
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
                ...state,
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
        case ActionTypes.SORT_APPLICATIONS:
            return {
                ...state,
                loaded: false,
                loading: false             
            };
        case ActionTypes.FILTER_APPLICATIONS:
            return {
                ...state,
                loaded: false,
                loading: false
            };
        case ActionTypes.MODIFY_APPLICATIONS: 
            return {
                ...state,
                loaded: true,
                loading: false,
                modifiedApplications: action.payload
            }
        default:
            return state;
    }
}

export const getApplications = (state: ApplicationsState) => state.applications;
export const getApplicationLoaded = (state: ApplicationsState) => state.loaded;
export const getApplicationLoading = (state: ApplicationsState) => state.loading;
export const filterApplications = (state: ApplicationsState) => state.applications;
export const sortApplications = (state: ApplicationsState) => state.applications;
export const modifyApplicationsList = (state: ApplicationsState) => state.modifiedApplications;