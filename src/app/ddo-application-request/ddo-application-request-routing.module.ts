import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  DdoApplicationRequestComponent,
  DdoApplicationRequestDashboardComponent,
  DdoApplicationRequestTasksComponent,
  DdoApplicationRequestReviewInformationComponent
} from './components';

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
