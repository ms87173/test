import * as ddoApplicationsReducers from './ddo-applications.reducer';
import * as fromRoot from "../../../store/reducers";

export { ddoApplicationsReducers };

export interface State extends fromRoot.AppState {
    applications: ddoApplicationsReducers.ApplicationsState
}
export const applicationsReducer = {
    applications: ddoApplicationsReducers.ApplicationsReducer
};