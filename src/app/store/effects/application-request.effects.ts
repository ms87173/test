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
import { switchMap, map, catchError, filter, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as fromRouterActions from '../actions/router.actions';
import { RouterGo } from '../actions/router.actions';
import { GetApplicationWorkflowsSuccess } from '../actions/workflows.action';

@Injectable()
export class ApplicationRequestEffects {

    @Effect() loadApplicationRequestEffect = this.actions$.pipe(
        ofType(fromRouterActions.ActionTypes.ROUTE_CHANGE),
        filter((routeChangeAction: fromRouterActions.RouteChange) =>
            routeChangeAction.payload.path === 'applications/:applicationId'),
        map((action) => {
            const { applicationId } = action.payload.params;
            return new GetApplicationRequest(applicationId);
        })
    );
    @Effect() getApplicationRequestEffect = this.actions$.pipe(
        ofType(ActionTypes.GET_APPLICATION_REQUEST),
        switchMap(
            (action: GetApplicationRequest) =>
                this.applicationRequestService.getApplicationRequest(action.payload)
                    .pipe(
                        mergeMap(
                            (application) => {
                                const { workflowGroups } = application;
                                const workflows = [];
                                if (workflowGroups && workflowGroups.length > 0) {
                                    workflowGroups.forEach(group => {
                                        const groupWorkflows = group.workflows;
                                        if (groupWorkflows && groupWorkflows.length > 0) {
                                            groupWorkflows.forEach(element => {
                                                workflows.push(element);
                                            });
                                        }
                                    });
                                }
                                // Temporary Change from Atul
                                /*  workflowsAndTask is closed instead
                                    we will restructure workflows from groups coming in request
                                */
                                let firstTaskId = '', lastTaskId = '';
                                if (workflows && workflows.length > 0) {
                                    const lastWorkflowIndex = workflows.length - 1;
                                    const lastWorkflow = workflows[lastWorkflowIndex];
                                    const tlen = lastWorkflow && lastWorkflow.tasks && lastWorkflow.tasks.length;
                                    const lastTask = lastWorkflow && lastWorkflow.tasks && lastWorkflow.tasks[tlen - 1];
                                    lastTaskId = lastTask && lastTask.id;
                                    firstTaskId = workflows[0] &&
                                        workflows[0].tasks &&
                                        workflows[0].tasks[0] &&
                                        workflows[0].tasks[0].id;
                                }
                                return [
                                    new GetApplicationRequestSuccess(application),
                                    new GetApplicationWorkflowsSuccess({
                                        workflows,
                                        lastTaskId,
                                        firstTaskId
                                    })
                                ];
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
