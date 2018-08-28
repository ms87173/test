import { Injectable } from '@angular/core';
import { ApplicationRequestService } from '../../core/services/application-request.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {
    ActionTypes,
    GetApplicationWorkflows,
    GetApplicationWorkflowsFailure,
    GetApplicationWorkflowsSuccess,
} from '../actions/workflows.action';
import { switchMap, map, catchError, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import * as fromRouterActions from '../actions/router.actions';

@Injectable()
export class ApplicationWorkflowsEffects {
    @Effect() loadApplicationRequestWorkflowsEffect = this.actions$.pipe(
        ofType(fromRouterActions.ActionTypes.ROUTE_CHANGE),
        filter((routeChangeAction: fromRouterActions.RouteChange) =>
            routeChangeAction.payload.path === 'applications/:applicationId'),
        map((action) => {
            const { applicationId } = action.payload.params;
            return new GetApplicationWorkflows(applicationId);
        })
    );
    @Effect() getApplicationRequestWorkflowsEffect = this.actions$.pipe(
        ofType(ActionTypes.GET_APPLICATION_REQUEST_WORKFLOWS),
        switchMap(
            (action: GetApplicationWorkflows) =>
                this.applicationRequestService.getApplicationRequestWorkflows(action.payload)
                    .pipe(
                        map(
                            (workflows) => {
                                return new GetApplicationWorkflowsSuccess(workflows)
                            }
                        ),
                        catchError(
                            (err) => of(new GetApplicationWorkflowsFailure(err))
                        )
                    )
        ));

    constructor(
        private applicationRequestService: ApplicationRequestService,
        private actions$: Actions
    ) { }
}
