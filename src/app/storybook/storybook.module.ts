import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NgxUploaderModule } from 'ngx-uploader';

import { StorybookRoutingModule } from './storybook-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CustomFormlyFieldsModule } from '../custom-formly-fields/custom-formly-fields.module';

import { LabelValueConsumerComponent } from './label-value-consumer/label-value-consumer.component';
import { StorybookComponent } from './storybook/storybook.component';
import { TileConsumerComponent } from './tile-consumer/tile-consumer.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { GridConsumerComponent } from './grid-consumer/grid-consumer.component';
import { FormlyConsumerComponent } from './formly-consumer/formly-consumer.component';
import { FormlyAddressConsumerComponent } from './formly-address-consumer/formly-address-consumer.component';
import { FormlyPhoneConsumerComponent } from './formly-phone-consumer/formly-phone-consumer.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StorybookRoutingModule,
    SharedModule,
    CustomFormlyFieldsModule,
    FormlyModule.forRoot({
      types: [{ name: 'repeat', component: FormlyConsumerComponent }]
    }),
    BsDropdownModule.forRoot(),
    NgxUploaderModule
  ],
  exports: [
    NgxUploaderModule
  ],
  declarations: [
    LabelValueConsumerComponent,
    StorybookComponent,
    TileConsumerComponent,
    GridConsumerComponent,
    FormlyConsumerComponent,
    FormlyAddressConsumerComponent,
    FormlyPhoneConsumerComponent
  ]
})
export class StorybookModule { }
