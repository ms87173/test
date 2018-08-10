import * as fromStore from "../reducers/";
import * as fromUser from '../reducers/user-info.reducers';
import { createSelector } from "@ngrx/store";

export const getUserState = (state: fromStore.AppState) => state.user;
export const getUserPersonalInfo = createSelector(
    getUserState,
    fromUser.getUserPersonalInfo
);
export const getUserRole = createSelector(
    getUserState,
    fromUser.getUserRole
);
export const getUserIsLoggedIn = createSelector(
    getUserState,
    fromUser.getUserIsLoggedIn
);
export const getUserIsAuthenticated = createSelector(
    getUserState,
    fromUser.getUserIsAuthenticated
);
export const getUserEntitlements = createSelector(
    getUserState,
    fromUser.getUserEntitlements
);
