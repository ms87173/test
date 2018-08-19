import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DdoApplicationRequestComponent } from './components/ddo-application-request/ddo-application-request.component';
import { DdoApplicationRequestDashboardComponent } from './components/ddo-application-request-dashboard/ddo-application-request-dashboard.component';
import { DdoApplicationRequestTasksComponent } from './components/ddo-application-request-tasks/ddo-application-request-tasks.component';

const routes: Routes = [
  {
    path: '',
    component: DdoApplicationRequestComponent
  },
  {
    path: 'dashboard',
    component: DdoApplicationRequestDashboardComponent
  },
  {
    path: 'tasks',
    component: DdoApplicationRequestTasksComponent,
    // children: [
    //   {
    //     path: 'questionnaire',
    //     component 
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DdoApplicationRequestRoutingModule { }
