import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { EffectsService } from './effects.service';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([EffectsService]),
    StoreModule.forFeature("testFeature", reducer)
  ],
  declarations: []
})

export class TestFeatureStateModule { }
