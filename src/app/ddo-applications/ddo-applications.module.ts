import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdoApplicationsComponent } from './ddo-applications.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core';
import { DdoApplicationsRoutingModule } from './ddo-applications-routing.module';
import { DdoApplicationsGridComponent } from './components/ddo-applications-grid/ddo-applications-grid.component';
import { DdoApplicationsRowComponent } from './components/ddo-applications-row/ddo-applications-row.component';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    DdoApplicationsRoutingModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [
    DdoApplicationsComponent,
    DdoApplicationsGridComponent,
    DdoApplicationsRowComponent
  ]
})
export class DdoApplicationsModule { }
