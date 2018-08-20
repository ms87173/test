import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestFeatureStateModule} from './state';
import { ProductsListComponent } from './products-list/products-list.component'
import { RouterModule } from '@angular/router';
import { TestFeatureRoutes } from './test-feature-routes';
import { ProductsListService } from './services/products-list.service';
import { CoreModule } from '../core';
import { SharedModule } from '../shared/shared.module';
import { QuestionnaireContainerComponent } from '../questionnaire-container/questionnaire-container.component';

@NgModule({
  imports: [
    CommonModule,
    TestFeatureStateModule,
    CoreModule,
    SharedModule,
    RouterModule.forChild(TestFeatureRoutes)
  ],
  declarations: [ProductsListComponent,
    QuestionnaireContainerComponent ],
  providers:[ProductsListService ],

})

export class TestFeatureModule { }