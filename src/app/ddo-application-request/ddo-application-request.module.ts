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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { DdoApplicationRequestHeaderComponent } from './components/ddo-application-request-header/ddo-application-request-header.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    DdoApplicationRequestRoutingModule,
    CustomFormlyFieldsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot()
  ],
  declarations: [
    DdoApplicationRequestComponent,
    DdoApplicationRequestDashboardComponent,
    DdoApplicationRequestTasksComponent,
    DdoApplicationRequestReviewInformationComponent,
    DdoApplicationRequestReviewInformationWorkflowComponent,
    DdoApplicationRequestReviewInformationTaskComponent,
    DdoApplicationRequestHeaderComponent
  ]
})
export class DdoApplicationRequestModule { }
