import { ActionReducerMap } from '@ngrx/store';
import * as userInfoReducer from '../reducers/user-info.reducers';
import * as questionnaireReducer from "../reducers/questionnaire.reducers";
import * as applicationsReducer from "../reducers/applications.reducers";

export interface AppState {
    user: userInfoReducer.UserInfoState,
    questionnaire: questionnaireReducer.QuestionnaireState,
    applications: applicationsReducer.ApplicationsState
}

export const rootReducers: ActionReducerMap<AppState> = {
    user: userInfoReducer.reducer,
    questionnaire: questionnaireReducer.reducer,
    applications: applicationsReducer.reducer
};

export {
    userInfoReducer,
    questionnaireReducer,
    applicationsReducer
};
