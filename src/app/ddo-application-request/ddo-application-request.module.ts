import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DdoApplicationRequestRoutingModule } from './ddo-application-request-routing.module';
import { DdoApplicationRequestComponent } from './components/ddo-application-request/ddo-application-request.component';
import { DdoApplicationRequestDashboardComponent } from './components/ddo-application-request-dashboard/ddo-application-request-dashboard.component';
import { DdoApplicationRequestTasksComponent } from './components/ddo-application-request-tasks/ddo-application-request-tasks.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DdoApplicationRequestRoutingModule
  ],
  declarations: [
    DdoApplicationRequestComponent,
    DdoApplicationRequestDashboardComponent,
    DdoApplicationRequestTasksComponent
  ]
})
export class DdoApplicationRequestModule { }
