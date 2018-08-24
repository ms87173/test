import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelValueConsumerComponent } from './label-value-consumer/label-value-consumer.component';
import { StorybookRoutingModule } from './storybook-routing.module';
import { StorybookComponent } from './storybook/storybook.component';
import { SharedModule } from './../shared/shared.module';
import { TileConsumerComponent } from './tile-consumer/tile-consumer.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { GridConsumerComponent } from './grid-consumer/grid-consumer.component';
import { CheckboxConsumerComponent } from './checkbox-consumer/checkbox-consumer.component';
import { CustomFormlyFieldsModule } from '../custom-formly-fields/custom-formly-fields.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StorybookRoutingModule,
    SharedModule,
    CustomFormlyFieldsModule,
    FormlyModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [LabelValueConsumerComponent,
    StorybookComponent,
    TileConsumerComponent,
    GridConsumerComponent,
    CheckboxConsumerComponent]
})
export class StorybookModule { }
