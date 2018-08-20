import { Injectable } from '@angular/core';
import { ApplicationsService } from '../../core/services/applications.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {
    ActionTypes,
    GetApplicationsSuccess,
    GetApplicationsFailure,
    SortApplicationsSuccess
} from '../actions/applications.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApplicationModel } from '../../core/models/application.interface';

@Injectable()
export class ApplicationsEffectsService {

    @Effect() getApplicationsEffect = this.actions$.pipe(
        ofType(ActionTypes.GET_APPLICATIONS),
        switchMap(
            () => this.applicationsService.getApplications()
                .pipe(
                    map(
                        (applications) => {
                            if (applications && applications.length > 0) {
                                const payload = applications.map(e => new ApplicationModel(e));
                                return new GetApplicationsSuccess(payload);
                            }
                            return new GetApplicationsSuccess([])
                        }),
                    catchError(
                        (err) => of(new GetApplicationsFailure(err))
                    )
                )
        ))
    @Effect() sortApplicationsEffect = this.actions$.pipe(
        ofType(ActionTypes.SORT_APPLICATIONS),
        switchMap(
            (action) => this.applicationsService.sortApplications('status')
                .pipe(
                    map(
                        (applications) => {
                            if (applications && applications.length > 0) {
                                const payload = applications.map(e => new ApplicationModel(e));
                                return new SortApplicationsSuccess(payload);
                            }
                            return new SortApplicationsSuccess([])}
                    ),
                    catchError(
                        (err) => of(new GetApplicationsFailure(err))
                    )
                )
        ))

    constructor(
        private applicationsService: ApplicationsService,
        private actions$: Actions
    ) { }
}
