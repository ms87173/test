import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { AccordionModule, ButtonsModule } from 'ngx-bootstrap';
import { LabelValueGroupComponent } from './label-value-group/label-value-group.component';
import { CardComponent } from './card/card.component';
import { CardHeaderComponent } from './card-header/card-header.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { GridComponent } from './grid/grid.component';
import { TileComponent } from './tile/tile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { TooltipModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CoreModule,
    ReactiveFormsModule,
    CommonModule,
    AccordionModule.forRoot(),
    FormsModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  declarations: [
    HeaderComponent,
    TabsComponent,
    TopNavComponent,
    SideNavComponent,
    FooterComponent,
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
