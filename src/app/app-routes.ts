import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
    {
        path: 'ddo',
        component: HomeComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'my-applications'
            },
            {
                path: 'storybook',
                loadChildren: './storybook/storybook.module#StorybookModule'
            },
            {
                path: 'my-applications',
                loadChildren: './ddo-applications/ddo-applications.module#DdoApplicationsModule'
            },
            {
                path: 'applications/:applicationId',
                loadChildren: './ddo-application-request/ddo-application-request.module#DdoApplicationRequestModule'
            }
        ]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'ddo'
    }
];
