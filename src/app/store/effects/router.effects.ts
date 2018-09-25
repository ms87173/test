import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router, ActivationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, tap, filter } from 'rxjs/operators';
import { RouterGo, RouteChange } from '../actions/router.actions';
import { Location } from '@angular/common';

@Injectable()
export class RouterEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private location: Location,
        private store: Store<any>
    ) {
        this.listenToRouter();
    }

    @Effect({ dispatch: false })
    navigate$ = this.actions$.pipe(
        ofType('[Router] Go'),
        map((action: RouterGo) => action.payload),
        tap(
            ({ path, queryParams, extras }) =>
                this.router.navigate(path, { queryParams, ...extras })
        )
    );

    @Effect({ dispatch: false })
    navigateBack$ = this.actions$.pipe(ofType('[Router] Back'), tap(() => this.location.back()));

    @Effect({ dispatch: false })
    navigateForward$ = this.actions$.pipe(
        ofType('[Router] Forward'),
        tap(() => this.location.forward())
    );

    private listenToRouter() {
        this.router.events.pipe(
            filter(event => event instanceof ActivationEnd)
        ).subscribe((event: ActivationEnd) =>
            this.store.dispatch(new RouteChange({
                params: { ...event.snapshot.params },
                path: event.snapshot.routeConfig.path
            }))
        );
    }
}
