import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export enum ActionTypes {
    ROUTER_GO = '[Router] Go',
    ROUTER_BACK = '[Router] Back',
    ROUTER_FORWARD = '[Router] Forward',
    ROUTE_CHANGE = '[Router] Route Change',
    CLEAR_ACTIVE_APPLICATION = '[App State] Clear Active Application from List',
    SORT_APPLICATIONS = '[App State] Sort Applications',
    APPLICATIONS_SORT_SUCCESS = '[App State] Applications Sort Success'
}

export class RouterGo implements Action {
    readonly type = ActionTypes.ROUTER_GO;

    constructor(
        public payload: {
            path: any[];
            queryParams?: object;
            extras?: NavigationExtras;
        }
    ) { }
}

export class RouterBack implements Action {
    readonly type = ActionTypes.ROUTER_BACK;
}

export class RouterForward implements Action {
    readonly type = ActionTypes.ROUTER_FORWARD;
}

export class RouteChange implements Action {
    readonly type = ActionTypes.ROUTE_CHANGE;
    constructor(public payload: { params: any, path: string }) { }
}

export type RouterActions = RouterBack | RouterForward | RouterGo | RouteChange