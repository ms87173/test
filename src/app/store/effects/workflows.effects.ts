import { Injectable } from '@angular/core';
import { ApplicationRequestService } from '../../core/services/application-request.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {
    ActionTypes,
    GetApplicationWorkflows,
    GetApplicationWorkflowsFailure,
    GetApplicationWorkflowsSuccess,
    SetActiveTask,
    SaveActiveTaskAndNext,
    SaveActiveTaskAndExit,
} from '../actions/workflows.action';
import { switchMap, map, catchError, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import * as fromRouterActions from '../actions/router.actions';
import { RouterGo } from '../actions/router.actions';

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
    // @Effect() getApplicationRequestWorkflowsEffect = this.actions$.pipe(
    //     ofType(ActionTypes.GET_APPLICATION_REQUEST_WORKFLOWS),
    //     switchMap(
    //         (action: GetApplicationWorkflows) =>
    //             this.applicationRequestService.getApplicationRequestWorkflows(action.payload)
    //                 .pipe(
    //                     map(
    //                         (workflows) => {
    //                             let firstTaskId = '', lastTaskId = '';
    //                             if (workflows && workflows.length > 0) {
    //                                 const lastWorkflowIndex = workflows.length - 1;
    //                                 const lastWorkflow = workflows[lastWorkflowIndex];
    //                                 const tlen = lastWorkflow && lastWorkflow.tasks && lastWorkflow.tasks.length;
    //                                 const lastTask = lastWorkflow && lastWorkflow.tasks && lastWorkflow.tasks[tlen - 1];
    //                                 lastTaskId = lastTask && lastTask.id;
    //                                 firstTaskId = workflows[0] &&
    //                                     workflows[0].tasks &&
    //                                     workflows[0].tasks[0] &&
    //                                     workflows[0].tasks[0].id;
    //                             }
    //                             return new GetApplicationWorkflowsSuccess({
    //                                 workflows,
    //                                 lastTaskId,
    //                                 firstTaskId
    //                             });
    //                         }
    //                     ),
    //                     catchError(
    //                         (err) => of(new GetApplicationWorkflowsFailure(err))
    //                     )
    //                 )
    //     ));
        @Effect() saveAndNextRequestTaskEffect = this.actions$.pipe(
            ofType(ActionTypes.SAVE_NEXT_REQUEST_ACTIVE_TASK),
            switchMap((action: SaveActiveTaskAndNext) =>
                this.applicationRequestService
                    .saveApplicationRequestTask(action.payload.current)
                    .pipe(
                        map(response => {
                            const { workflowId, taskId} = action.payload;
                            //console.log(response);
                            //console.log(`Task is Saved Redirecting to next task with workflowId ${workflowId} and taskId ${taskId}`);
                            return new SetActiveTask({
                                workflowId,
                                taskId
                            });
                        }),
                        catchError(error => {
                            //console.log(error);
                            return of({}
                            // new RouterGo({
                            //     path: ['ddo', 'error', { ...error }]
                            // }))
                        );
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
                            //console.log(response);
                            //console.log('Task is Saved');
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
                ));

    constructor(
        private applicationRequestService: ApplicationRequestService,
        private actions$: Actions
    ) { }
}
