import { ActionTypes, UserActions } from "../actions/user-info.actions";
import { PersonalInfoInterface, PersonalInfoModel } from "../../core/models/personal-info.interface";
import { UserInfoInterface, UserInfoModel } from "../../core/models/user-info.interface";

//TODO: we can discuss the naming convention
export interface UserInfoState {
    personalInfo: PersonalInfoInterface,
    role: string,
    isLoggedIn: boolean,
    isAuthenticated: boolean,
    entitlements: Array<any>,
    contactPerson: any
}

export const InitialUserInfoState: UserInfoState = {
    personalInfo: new PersonalInfoModel(null),
    role: "",
    isLoggedIn: false,
    isAuthenticated: null,
    entitlements: [],
    contactPerson: null
}

export function reducer(state: UserInfoState = InitialUserInfoState, action: UserActions) {
    switch (action.type) {
        case ActionTypes.GET_USER_SUCCESS:
            const { personalInfo, role, entitlements} = action.payload;
            return {
                ...state,
                personalInfo,
                entitlements,
                role,
                isLoggedIn: true,
                isAuthenticated: true
            };
        case ActionTypes.GET_USER_FAIL:
            return {
                ...state,
                isAuthenticated: false
            };
        case ActionTypes.GET_USER_CONTACT_PERSON_SUCCESS:
            return {
                ...state,
                contactPerson: action.payload
            };
        default:
            return state;
    }
}

export const getUserPersonalInfo = (state: UserInfoState) => state.personalInfo;
export const getUserRole = (state: UserInfoState) => state.role;
export const getUserIsLoggedIn = (state: UserInfoState) => state.isLoggedIn;
export const getUserIsAuthenticated = (state: UserInfoState) => state.isAuthenticated;
export const getUserEntitlements = (state: UserInfoState) => state.entitlements;
export const getUserContactPerson = (state: UserInfoState) => state.contactPerson;
