import { Injectable } from '@angular/core';
import { ApplicationsService } from '../../../core/services/applications.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {
    ActionTypes,
    GetApplicationsSuccess,
    GetApplicationsFailure,
    SortApplications,
    FilterApplications
} from '../actions/ddo-applications.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ApplicationModel } from '../../../core/models/application.interface';
import { sortApplications, filterApplications } from '../../../core/utilities/applications.utility';

@Injectable()
export class DdoApplicationsEffects {

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
                            return new GetApplicationsSuccess([]);
                        }),
                    catchError(
                        (err) => of(new GetApplicationsFailure(err))
                    )
                )
        ));
        @Effect() sortApplications = this.actions$.pipe(
            ofType(ActionTypes.SORT_APPLICATIONS),
            switchMap(
                (action: SortApplications) => 
                    sortApplications(action.payload.data, action.payload.params)
                        .pipe(
                            map(
                                (data) => {
                                    return new GetApplicationsSuccess(data);
                                })
                        )
                ));
                @Effect() filterApplications = this.actions$.pipe(
                    ofType(ActionTypes.FILTER_APPLICATIONS),
                    switchMap(
                        (action: FilterApplications) => 
                            filterApplications(action.payload.data, action.payload.params)
                                .pipe(
                                    map(
                                        (data) => {
                                            return new GetApplicationsSuccess(data);
                                        })
                                )
                        ));
    constructor(
        private applicationsService: ApplicationsService,
        private actions$: Actions
    ) { }
}
