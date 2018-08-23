import { Injectable } from '@angular/core';
import { ApplicationRequestService } from '../../core/services/application-request.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {
    ActionTypes,
    GetApplicationRequestSuccess,
    GetApplicationRequestFailure,
    GetApplicationRequestWorkflowsSuccess,
    GetApplicationRequestWorkflowsFailure,
    GetApplicationRequest,
    GetApplicationRequestWorkflows,
    DeterminePendingTaskOfApplication
} from '../actions/application-request.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ApplicationRequestEffects {

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
        ))
    @Effect() getApplicationRequestWorkflowsEffect = this.actions$.pipe(
        ofType(ActionTypes.GET_APPLICATION_REQUEST_WORKFLOWS),
        switchMap(
            (action: GetApplicationRequestWorkflows) =>
                this.applicationRequestService.getApplicationRequestWorkflows(action.payload)
                    .pipe(
                        map(
                            (workflows) => {
                                return new GetApplicationRequestWorkflowsSuccess(workflows)
                            }
                        ),
                        catchError(
                            (err) => of(new GetApplicationRequestWorkflowsFailure(err))
                        )
                    )
        ))
    @Effect() determinePendingTaskOfApplication = this.actions$.pipe(
        ofType(ActionTypes.DETERMINE_PENDING_TASK_OF_APPLICATION_REQUEST),
        switchMap(
            (action: DeterminePendingTaskOfApplication) =>
                action.payload
                    .filter(([actions$: Actions, storeState: AppState]) {
                        console.log(storeState);
                    })
        )
    )
    constructor(
        private applicationRequestService: ApplicationRequestService,
        private actions$: Actions
    ) { }
}
