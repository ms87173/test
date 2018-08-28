import { Injectable } from '@angular/core';
import { ApplicationRequestService } from '../../core/services/application-request.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {
    ActionTypes,
    DeterminePendingTaskOfApplication,
    GetApplicationWorkflows,
    GetApplicationWorkflowsFailure,
    GetApplicationWorkflowsSuccess,
    SetActiveTask
} from '../actions/workflows.action';
import { switchMap, map, catchError, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import * as fromRouterActions from '../actions/router.actions';
import { TASKS_STATUSES } from '../../core/constants/application-request.constants';

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

    @Effect() setPendingTask = this.actions$.pipe(
        ofType(ActionTypes.DETERMINE_PENDING_TASK_OF_APPLICATION_REQUEST),
        switchMap(
            (action: DeterminePendingTaskOfApplication) => 
                { console.log(action.payload);
                return this.determinePendingTask(action.payload)
                    .pipe(
                        map(
                            (data) => {
                                return new SetActiveTask(data);
                            })
                    )
                }));

    constructor(
        private applicationRequestService: ApplicationRequestService,
        private actions$: Actions
    ) { }
    determinePendingTask(workflows) {
        let pendingTask = false, count = 0, taskId = null, workflowId = null;
        while(count < workflows.length) {
            const workflow = workflows[count];
            if (workflow.status === TASKS_STATUSES.pending) {
                workflowId = workflow.id;
                let count1 = 0;
                while(count1 < workflow.tasks.length) {
                    const task = workflow.tasks[count1];
                    if (task.status === TASKS_STATUSES.pending) {
                        taskId = task.id;
                        pendingTask = true;
                        break;
                    }
                    count1++;
                }
                break;
            }
            count++;
        }
        return of({
            workflowId,
            taskId
        });
    }
}
