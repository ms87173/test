import { Injectable } from '@angular/core';
import { ApplicationRequestService } from '../../core/services/application-request.service';
import { Effect, Actions, ofType } from "@ngrx/effects";
import {
    ActionTypes,
    GetApplicationRequestSuccess,
    GetApplicationRequestFailure,
    GetApplicationRequestWorkflowsSuccess,
    GetApplicationRequestWorkflowsFailure,
    GetApplicationRequest,
    GetApplicationRequestWorkflows
} from "../actions/application-request.actions";
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

    constructor(
        private applicationRequestService: ApplicationRequestService,
        private actions$: Actions
    ) { }
}
