import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelValueConsumerComponent } from './label-value-consumer/label-value-consumer.component';
import { StorybookRoutingModule } from './storybook-routing.module';
import { StorybookComponent } from './storybook/storybook.component';
import { SharedModule } from './../shared/shared.module';
import { TileConsumerComponent } from './tile-consumer/tile-consumer.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { GridConsumerComponent } from './grid-consumer/grid-consumer.component';
import { FormlyConsumerComponent } from './formly-consumer/formly-consumer.component';
import { CustomFormlyFieldsModule } from '../custom-formly-fields/custom-formly-fields.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { DropdownComponent } from 'src/app/custom-formly-fields/components/dropdown/dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    StorybookRoutingModule,
    SharedModule,
    BsDropdownModule.forRoot(),
    CustomFormlyFieldsModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [
        { name: 'select', component: DropdownComponent }
      ],
    })
  ],
  declarations: [
    LabelValueConsumerComponent,
    StorybookComponent,
    TileConsumerComponent,
    GridConsumerComponent,
    FormlyConsumerComponent
  ]
})
export class StorybookModule { }
