import { Injectable } from '@angular/core';
import { ApplicationRequestService } from '../../core/services/application-request.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {
    ActionTypes,
    GetApplicationWorkflows,
    SetActiveTask,
    SaveActiveTaskAndNext,
    SaveActiveTaskAndExit,
} from '../actions/workflows.action';
import { switchMap, map, catchError, filter, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as fromRouterActions from '../actions/router.actions';
import { RouterGo } from '../actions/router.actions';
import { GetApplicationRequest } from '../actions/application.actions';

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
    @Effect() saveAndNextRequestTaskEffect = this.actions$.pipe(
        ofType(ActionTypes.SAVE_NEXT_REQUEST_ACTIVE_TASK),
        switchMap((action: SaveActiveTaskAndNext) =>
            this.applicationRequestService
                .saveApplicationRequestTask(action.payload.current)
                .pipe(
                    mergeMap((response) => {
                        const { workflowId, taskId } = action.payload;
                        const { requestId } = action.payload.current;
                        return [
                            new GetApplicationRequest(requestId),
                            new SetActiveTask({
                                workflowId,
                                taskId
                            })
                        ];
                    }),
                    catchError(error => {
                        console.log(error);
                        return of({});
                    })
                )
        ));
    @Effect() saveAndExitRequestTaskEffect = this.actions$.pipe(
        ofType(ActionTypes.SAVE_EXIT_REQUEST_ACTIVE_TASK),
        switchMap((action: SaveActiveTaskAndExit) =>
            this.applicationRequestService
                .saveApplicationRequestTask(action.payload)
                .pipe(
                    map(response => {
                        return new RouterGo({
                            path: ['ddo', 'my-applications']
                        });
                    }),
                    catchError(error => {
                        console.log(error);
                        return of({});
                    })
                )
        ));

    constructor(
        private applicationRequestService: ApplicationRequestService,
        private actions$: Actions
    ) { }
}
