import { Injectable } from '@angular/core';
import { UserInfoService } from '../../core/services/user-info.service';
import { Effect, Actions, ofType } from "@ngrx/effects";
import { GetUserSuccess, GetUserFailure, ActionTypes, GetUserContactPersonSuccess, GetUserContactPersonFailure } from "../actions/user-info.actions";
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserInfoModel } from '../../core/models/user-info.interface';
import { PersonalInfoModel } from '../../core/models/personal-info.interface';

@Injectable()
export class UserInfoEffectsService {

    @Effect() getUserInfoEffect = this.actions$.pipe(
        ofType(ActionTypes.GET_USER),
        switchMap(
            (action) => this.userInfoService.getUserInfo()
                .pipe(
                    map(
                        (userInfo) => {
                            return new GetUserSuccess(new UserInfoModel(userInfo));
                        }
                    ),
                    catchError(
                        (err) => of(new GetUserFailure(err))
                    )
                )
        ))
    @Effect() getUserContactPersonEffect = this.actions$.pipe(
        ofType(ActionTypes.GET_USER_CONTACT_PERSON),
        switchMap(
            (action) => this.userInfoService.getUserContactPerson()
                .pipe(
                    map(
                        (contactPerson) => {
                            return new GetUserContactPersonSuccess(contactPerson);
                        }
                    ),
                    catchError(
                        (err) => of(new GetUserContactPersonFailure(err))
                    )
                )
        ))

    constructor(
        private userInfoService: UserInfoService,
        private actions$: Actions
    ) { }

}
