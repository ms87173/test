import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { TooltipModule } from 'ngx-bootstrap';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddressComponent } from './components/address/address.component';
import { FormGroupWrapperComponent } from '../shared/form-group-wrapper/form-group-wrapper.component';
import { QuestionnaireComponent } from '../questionnaire/questionnaire.component';
import { SectionComponent } from '../section/section.component';
import { TaskContainerComponent } from '../task-container/task-container.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyBootstrapModule,
    NgbModule.forRoot(),
    FormlyModule.forRoot({
      wrappers: [
        { name: 'form-group', component: FormGroupWrapperComponent },
      ],
      validationMessages: [
        { name: 'server-error', message: (err) => err }
      ],
      types: [
        { name: 'customCheckbox', component: CheckboxComponent },
        { name: 'dropdown', component: DropdownComponent },
        { name: 'radioButton', component: RadiobuttonComponent },
        { name: 'typeahead', component: AutoCompleteComponent, extends: 'input' },
        { name: 'datePicker', component: DatePickerComponent },
        { name: 'address', component: AddressComponent }
      ]
    }),

    FormlyBootstrapModule,
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    DropdownComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    AutoCompleteComponent,
    DatePickerComponent,
    AddressComponent,
    QuestionnaireComponent,
    SectionComponent,
    TaskContainerComponent
  ],
  exports: [
    DropdownComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    AutoCompleteComponent,
    DatePickerComponent,
    AddressComponent,
    QuestionnaireComponent,
    SectionComponent,
    TaskContainerComponent
  ]
})
export class CustomFormlyFieldsModule { }
