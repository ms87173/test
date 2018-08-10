import { NgModule, InjectionToken } from '@angular/core';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import * as fromRoot from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { QuestionnaireEffectsService, UserInfoEffectsService, ApplicationsEffectsService } from './effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

export const REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<fromRoot.AppState>
>('Registered Reducers');

export function getReducers() {
  return fromRoot.rootReducers;
}

@NgModule({
  imports: [
    StoreModule.forRoot(REDUCER_TOKEN),
    EffectsModule.forRoot([
      UserInfoEffectsService,
      QuestionnaireEffectsService,
      ApplicationsEffectsService
    ]),
    StoreDevtoolsModule.instrument({
      name: "Citi DDO UI",
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [
    {
      provide: REDUCER_TOKEN,
      useFactory: getReducers
    },
  ],
})

export class AppStoreModule {}