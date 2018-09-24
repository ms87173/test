import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DdoApplicationRequestRoutingModule } from './ddo-application-request-routing.module';
import { DdoApplicationRequestComponent } from './components/ddo-application-request/ddo-application-request.component';
import { DdoApplicationRequestDashboardComponent }
  from './components/ddo-application-request-dashboard/ddo-application-request-dashboard.component';
import { DdoApplicationRequestTasksComponent } from './components/ddo-application-request-tasks/ddo-application-request-tasks.component';
import { SharedModule } from '../shared/shared.module';
import { CustomFormlyFieldsModule } from '../custom-formly-fields/custom-formly-fields.module';
import { DdoApplicationRequestReviewInformationComponent }
  from './components/ddo-application-request-review-information/ddo-application-request-review-information.component';
import { DdoApplicationRequestReviewInformationWorkflowComponent }
  from './components/ddo-application-request-review-information-workflow/ddo-application-request-review-information-workflow.component';
import { DdoApplicationRequestReviewInformationTaskComponent }
  from './components/ddo-application-request-review-information-task/ddo-application-request-review-information-task.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NgxMdModule } from 'ngx-md';
import { DdoApplicationRequestHeaderComponent } from './components/ddo-application-request-header/ddo-application-request-header.component';
import 'prismjs/prism';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-perl';
import { DdoApplicationRequestSignAndSubmitComponent }
  from './components/ddo-application-request-sign-and-submit/ddo-application-request-sign-and-submit.component';
import { DdoApplicationRequestSuccessComponent }
  from './components/ddo-application-request-success/ddo-application-request-success.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    DdoApplicationRequestRoutingModule,
    CustomFormlyFieldsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    NgxMdModule.forRoot()
  ],
  declarations: [
    DdoApplicationRequestComponent,
    DdoApplicationRequestDashboardComponent,
    DdoApplicationRequestTasksComponent,
    DdoApplicationRequestReviewInformationComponent,
    DdoApplicationRequestReviewInformationWorkflowComponent,
    DdoApplicationRequestReviewInformationTaskComponent,
    DdoApplicationRequestHeaderComponent,
    DdoApplicationRequestSignAndSubmitComponent,
    DdoApplicationRequestSuccessComponent
  ]
})
export class DdoApplicationRequestModule { }
