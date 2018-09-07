import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DdoApplicationsEffects } from './effects/ddo-applications.effects';
import { applicationsReducer } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([DdoApplicationsEffects]),
    StoreModule.forFeature('ddoApplicationsFeature', applicationsReducer)
  ],
  declarations: []
})

export class DdoApplicationsStateModule { }
