import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabelValueConsumerComponent } from './label-value-consumer/label-value-consumer.component';
import { StorybookComponent } from './storybook/storybook.component';
import { TileConsumerComponent } from './tile-consumer/tile-consumer.component';
import { GridConsumerComponent } from './grid-consumer/grid-consumer.component';
import { FormlyConsumerComponent } from './formly-consumer/formly-consumer.component';
import { FormlyAddressConsumerComponent } from './formly-address-consumer/formly-address-consumer.component';

const routes: Routes = [
    {
        path: '',
        component: StorybookComponent
    },
    {
        path: 'labelgroup',
        component: LabelValueConsumerComponent
    },
    {
        path: 'tile',
        component: TileConsumerComponent
    },
    {
        path: 'grid',
        component: GridConsumerComponent
    },
    {
        path: 'formly',
        component: FormlyConsumerComponent
    },
    {
        path: 'formly-address',
        component: FormlyAddressConsumerComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StorybookRoutingModule { }
