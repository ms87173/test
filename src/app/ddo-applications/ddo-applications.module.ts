import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdoApplicationsComponent } from './ddo-applications.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core';
import { DdoApplicationsRoutingModule } from './ddo-applications-routing.module';
import { DdoApplicationsGridComponent } from './components/ddo-applications-grid/ddo-applications-grid.component';
import { DdoApplicationsRowComponent } from './components/ddo-applications-row/ddo-applications-row.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { DdoApplicationsStateModule } from './state/ddo-applications-store-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomFormlyFieldsModule } from '../custom-formly-fields/custom-formly-fields.module';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [
    CommonModule,
    CustomFormlyFieldsModule,
    SharedModule,
    CoreModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    DdoApplicationsRoutingModule,
    BsDropdownModule.forRoot(),
    DdoApplicationsStateModule
  ],
  declarations: [
    DdoApplicationsComponent,
    DdoApplicationsGridComponent,
    DdoApplicationsRowComponent
  ]
})
export class DdoApplicationsModule { }
