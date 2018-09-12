import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {
    ActionTypes,
    GetAllTasksForReviewInformationTask,
    GetAllTasksForReviewInformationTaskSuccess,
    GetAllTasksForReviewInformationTaskFailure
} from '../actions/review-information.actions';
import { ReviewInformationService } from '../../core/services/review-information.service';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ReviewInformationResponse } from '../../core';



@Injectable()
export class ApplicationReviewInformationEffects {

    @Effect() getReviewInformationTaskEffect = this.actions$.pipe(
        ofType(ActionTypes.GET_ALL_TASKS_FOR_REVIEW_INFORMATION_TASK),
        switchMap(
            (action: GetAllTasksForReviewInformationTask) =>
                this.reviewInformationService.getReviewInformationTask(action.payload)
                    .pipe(
                        map(
                            (reviewInformationTask: ReviewInformationResponse) =>(new GetAllTasksForReviewInformationTaskSuccess(reviewInformationTask))
                        ),
                        catchError(
                            (err) => of(new GetAllTasksForReviewInformationTaskFailure(err))
                        )
                    )
        ));

    constructor(
        private reviewInformationService: ReviewInformationService,
        private actions$: Actions
    ) { }
}
