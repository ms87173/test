import { ActionReducerMap } from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';
import { Params, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import * as userInfoReducer from '../reducers/user-info.reducers';
import * as questionnaireReducer from '../reducers/questionnaire.reducers';
import * as applicationsReducer from '../reducers/applications.reducers';
import * as applicationRequestReducer from './application-request.reducers';

export interface RouteStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
}

export interface AppState {
    user: userInfoReducer.UserInfoState,
    questionnaire: questionnaireReducer.QuestionnaireState,
    applications: applicationsReducer.ApplicationsState,
    routerReducer: fromRouter.RouterReducerState,
    applicationRequest: applicationRequestReducer.ApplicationRequestState
}

export const rootReducers: ActionReducerMap<AppState> = {
    user: userInfoReducer.reducer,
    questionnaire: questionnaireReducer.reducer,
    applications: applicationsReducer.reducer,
    routerReducer: fromRouter.routerReducer,
    applicationRequest: applicationRequestReducer.reducer
};

export {
    userInfoReducer,
    questionnaireReducer,
    applicationsReducer,
    applicationRequestReducer
};

export class CustomSerializer
    implements fromRouter.RouterStateSerializer<RouteStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouteStateUrl {
        const { url } = routerState;
        const { queryParams } = routerState.root;
        let state: ActivatedRouteSnapshot = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        const { params } = state;
        return { url, queryParams, params };
    }
}
