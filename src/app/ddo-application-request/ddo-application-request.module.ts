import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DdoApplicationRequestRoutingModule } from './ddo-application-request-routing.module';
import { DdoApplicationRequestComponent } from './components/ddo-application-request/ddo-application-request.component';
import { DdoApplicationRequestDashboardComponent } from './components/ddo-application-request-dashboard/ddo-application-request-dashboard.component';
import { DdoApplicationRequestTasksComponent } from './components/ddo-application-request-tasks/ddo-application-request-tasks.component';
import { SharedModule } from '../shared/shared.module';
import { CustomFormlyFieldsModule } from '../custom-formly-fields/custom-formly-fields.module';
import { DdoApplicationRequestReviewInformationComponent } from './components/ddo-application-request-review-information/ddo-application-request-review-information.component';
import { DdoApplicationRequestReviewInformationWorkflowComponent } from './components/ddo-application-request-review-information-workflow/ddo-application-request-review-information-workflow.component';
import { DdoApplicationRequestReviewInformationTaskComponent } from './components/ddo-application-request-review-information-task/ddo-application-request-review-information-task.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DdoApplicationRequestRoutingModule,
    CustomFormlyFieldsModule
  ],
  declarations: [
    DdoApplicationRequestComponent,
    DdoApplicationRequestDashboardComponent,
    DdoApplicationRequestTasksComponent,
    DdoApplicationRequestReviewInformationComponent,
    DdoApplicationRequestReviewInformationWorkflowComponent,
    DdoApplicationRequestReviewInformationTaskComponent
  ]
})
export class DdoApplicationRequestModule { }
