import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'testfeature',
                loadChildren: './test-feature/test-feature.module#TestFeatureModule'
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
                path: 'applications/:id',
                loadChildren: './ddo-application-request/ddo-application-request.module#DdoApplicationRequestModule'
            }
        ]
    },
    
];
