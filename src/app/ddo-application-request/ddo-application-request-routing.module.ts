import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  DdoApplicationRequestComponent,
  DdoApplicationRequestDashboardComponent,
  DdoApplicationRequestTasksComponent,
  DdoApplicationRequestReviewInformationComponent
} from './components';
import { DdoApplicationRequestSignAndSubmitComponent } from './components/ddo-application-request-sign-and-submit/ddo-application-request-sign-and-submit.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: DdoApplicationRequestComponent,
    children: [
      {
        path: 'questionnaire',
        component: DdoApplicationRequestTasksComponent
      },
      {
        path: 'review-application',
        component: DdoApplicationRequestReviewInformationComponent
      },
      {
        path: 'sign-submit',
        component: DdoApplicationRequestSignAndSubmitComponent
      }
    ]
  },
  {
    path: 'dashboard',
    component: DdoApplicationRequestDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DdoApplicationRequestRoutingModule { }
