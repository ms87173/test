import { Injectable } from '@angular/core';
import { ApplicationRequestService } from '../../core/services/application-request.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {
    ActionTypes,
    GetApplicationRequestSuccess,
    GetApplicationRequestFailure,
    GetApplicationRequest,
    CancelApplicationRequest
} from '../actions/application.actions';
import { switchMap, map, catchError, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import * as fromRouterActions from '../actions/router.actions';
import { RouterGo } from '../actions/router.actions';

@Injectable()
export class ApplicationRequestEffects {

    @Effect() loadApplicationRequestEffect = this.actions$.pipe(
        ofType(fromRouterActions.ActionTypes.ROUTE_CHANGE),
        filter((routeChangeAction: fromRouterActions.RouteChange) =>
            routeChangeAction.payload.path === 'applications/:applicationId'),
        map((action) => {
            const { applicationId } = action.payload.params;
            return new GetApplicationRequest(applicationId)
        })
    );
    @Effect() getApplicationRequestEffect = this.actions$.pipe(
        ofType(ActionTypes.GET_APPLICATION_REQUEST),
        switchMap(
            (action: GetApplicationRequest) =>
                this.applicationRequestService.getApplicationRequest(action.payload)
                    .pipe(
                        map(
                            (application) => {
                                return new GetApplicationRequestSuccess(application);
                            }),
                        catchError(
                            (err) => of(new GetApplicationRequestFailure(err))
                        )
                    )
        ));
    @Effect() cancelApplicationRequestEffect = this.actions$.pipe(
        ofType(ActionTypes.CANCEL_APPLICATION_REQUEST),
        switchMap(
            (action: CancelApplicationRequest) =>
                this.applicationRequestService.cancelApplicationRequest(action.payload)
                    .pipe(
                        map(response => {
                            return new RouterGo({
                                path: ['ddo', 'my-applications']
                            });
                        }),
                        catchError(
                            error => of(
                                new RouterGo({
                                    path: ['ddo', 'error', { ...error }]
                                }))
                        )
                    )
        )
    )
    constructor(
        private applicationRequestService: ApplicationRequestService,
        private actions$: Actions
    ) { }
}
