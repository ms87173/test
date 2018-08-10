import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelValueConsumerComponent } from './label-value-consumer/label-value-consumer.component';
import { StorybookRoutingModule } from './storybook-routing.module';
import { StorybookComponent } from './storybook/storybook.component';
import { SharedModule } from './../shared/shared.module';
import { TileConsumerComponent } from './tile-consumer/tile-consumer.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { GridConsumerComponent } from './grid-consumer/grid-consumer.component';
@NgModule({
  imports: [
    CommonModule,
    StorybookRoutingModule,
    SharedModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [LabelValueConsumerComponent, StorybookComponent, TileConsumerComponent, GridConsumerComponent]
})
export class StorybookModule { }
