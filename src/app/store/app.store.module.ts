import { NgModule, InjectionToken } from '@angular/core';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { AppState, rootReducers, CustomSerializer, } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { effects } from './effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';

export const REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<AppState>
  >('Registered Reducers');

export function getReducers() {
  return rootReducers;
}

@NgModule({
  imports: [
    StoreModule.forRoot(REDUCER_TOKEN),
    EffectsModule.forRoot(effects),
    !environment.production ? StoreDevtoolsModule.instrument({
      name: 'Citi DDO UI',
      maxAge: 25,
      logOnly: environment.production
    }) : [],
    StoreRouterConnectingModule
  ],
  providers: [
    {
      provide: REDUCER_TOKEN,
      useFactory: getReducers
    },
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ],
})

export class AppStoreModule { }