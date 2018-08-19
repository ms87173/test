import * as fromStore from '../reducers/';
import * as fromRouter from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';

export const getRouterState = createFeatureSelector<
    fromRouter.RouterReducerState<fromStore.RouteStateUrl>
>('routerReducer')