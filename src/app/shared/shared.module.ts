import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { FormGroupWrapperComponent } from './form-group-wrapper/form-group-wrapper.component';
import { FormlyModule } from '@ngx-formly/core';
import { AccordionModule } from 'ngx-bootstrap';
import { LabelValueGroupComponent } from './label-value-group/label-value-group.component';
import { CardComponent } from './card/card.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { GridComponent } from './grid/grid.component';
import { TileComponent } from './tile/tile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

@NgModule({
  imports: [
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AccordionModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      wrappers: [
        { name: 'form-group', component: FormGroupWrapperComponent },
      ],
    }),
    FormlyBootstrapModule,
    CoreModule
  ],
  providers: [],
  declarations: [
    HeaderComponent,
    TabsComponent,
    TopNavComponent,
    SideNavComponent,
    FooterComponent,
    FormGroupWrapperComponent,
    LabelValueGroupComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    GridComponent,
    TileComponent,
    ContactDetailComponent
  ],
  exports: [
    HeaderComponent,
    TabsComponent,
    TopNavComponent,
    SideNavComponent,
    FooterComponent,
    FormGroupWrapperComponent,
    LabelValueGroupComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    GridComponent,
    TileComponent,
    ContactDetailComponent
  ]
})
export class SharedModule { }
