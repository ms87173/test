import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {
    ActionTypes,
    DeterminePendingTaskOfApplication,
    SetActiveTask
} from '../actions/workflows.action';
import { switchMap, map } from 'rxjs/operators';
import { determinePendingTask, changeActiveTaskConclusion } from '../../core/utilities/application-request.utility';
import { of } from 'rxjs';

@Injectable()
export class TasksEffects {

    @Effect() determinePendingTask = this.actions$.pipe(
        ofType(ActionTypes.DETERMINE_PENDING_TASK_OF_APPLICATION_REQUEST),
        switchMap(
            (action: DeterminePendingTaskOfApplication) =>
                of(determinePendingTask(action.payload))
                    .pipe(map((data) => {
                            return new SetActiveTask(data);
                        })
                    )
    ));
    // @Effect() setPendingTask = this.actions$.pipe(
    //     ofType(ActionTypes.SET_ACTIVE_TASK),
    //     switchMap(
    //         (action: SetActiveTask) =>
    //             of(changeActiveTaskConclusion({ ...action.payload }))
    //                 .pipe(map((data) => {
    //                         return new SetActiveTask(data);
    //                     })
    //                 )
    // ));

    constructor(
        private actions$: Actions
    ) { }
}
