import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DdoApplicationsComponent } from './ddo-applications.component';

const ModuleRoutes: Routes = [
    {
        path: '',
        component: DdoApplicationsComponent
    }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ModuleRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class DdoApplicationsRoutingModule { }
