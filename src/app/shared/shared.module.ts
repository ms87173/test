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
import { AccordionModule, ButtonsModule } from 'ngx-bootstrap';
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
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { SectionComponent } from './section/section.component';
import { CustomFormlyFieldsModule } from '../custom-formly-fields/custom-formly-fields.module';
import { CheckboxComponent } from '../custom-formly-fields/components/checkbox/checkbox.component';
import { DropdownComponent } from '../custom-formly-fields/components/dropdown/dropdown.component';
import { TooltipModule } from 'ngx-bootstrap';
import { AddressComponent } from '../custom-formly-fields/components/address/address.component';
import { AutoCompleteComponent } from '../custom-formly-fields/components/auto-complete/auto-complete.component';
import { RadiobuttonComponent } from '../custom-formly-fields/components/radiobutton/radiobutton.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CoreModule,
    ReactiveFormsModule,
    CommonModule,
    AccordionModule.forRoot(),
    FormsModule,
    FormlyBootstrapModule,
    NgbModule.forRoot(),
    FormlyModule.forRoot({
      wrappers:  [
        {  name:  'form-group',  component:  FormGroupWrapperComponent  },
      ],
      validationMessages: [
        { name: 'server-error', message: (err) => err }
      ],
      types: [
        { name: 'customCheckbox', component: CheckboxComponent },
        { name: 'select', component: DropdownComponent },
        { name: 'radioButton', component: RadiobuttonComponent},
        { name: 'typeahead', component: AutoCompleteComponent, extends: 'input'},
        {name:"address", component:AddressComponent}
      ]
    }),
    FormlyBootstrapModule,
    CoreModule,
    TooltipModule.forRoot(),
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
    ContactDetailComponent,
    QuestionnaireComponent,
    SectionComponent,
    AddressComponent,
    CheckboxComponent,
    DropdownComponent,
    RadiobuttonComponent,
    AutoCompleteComponent
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
    ContactDetailComponent,
    QuestionnaireComponent,
    SectionComponent,
    AddressComponent,
    CheckboxComponent,
    DropdownComponent,
    RadiobuttonComponent,
    AutoCompleteComponent
     


  ]
})
export class SharedModule { }
