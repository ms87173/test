import {
    ActionTypes,
    ApplicationActions
} from '../actions/ddo-applications.actions';
import { ApplicationInterface } from '../../../core/models/application.interface';

export interface ApplicationsState {
    applications: Array<ApplicationInterface>;
    isLoaded: boolean;
    // TODO: view data if required
}

export const InitialState: ApplicationsState = {
    applications: [],
    isLoaded: false
};

export function reducer(
    state: ApplicationsState = InitialState,
    action: ApplicationActions
): ApplicationsState {
    switch (action.type) {
        case ActionTypes.APPLICATIONS_SORT_SUCCESS:
        case ActionTypes.GET_APPLICATIONS_SUCCESS:
            return {
                ...state,
                isLoaded: true,
                applications: action.payload
            };
        case ActionTypes.SORT_APPLICATIONS: {
            return {
                ...state,
                isLoaded: false
            };
        }
        // case ActionTypes.SET_ACTIVE_APPLICATION:
        //     const id = action.payload;
        //     let applications = [];
        //     applications = state.applications.map(e =>{
        //         e.active = e.id === id
        //         return e
        //     });
        //     return {
        //         ...state,
        //         applications
        //     };
        case ActionTypes.GET_APPLICATIONS_FAIL:
        default:
            return state;
    }
}

export const getApplicaitons = (state: ApplicationsState) => state.applications;
export const getApplicationsIsLoaded = (state: ApplicationsState) => state.isLoaded;
export const getSelectedApplication =
    (state: ApplicationsState) => state.applications.filter(e => e.active);
export const getSelectedApplicationId =
    (state: ApplicationsState) => {
        const application = state.applications.find(e => e.active);
        return application ? application.id : null;
    };
