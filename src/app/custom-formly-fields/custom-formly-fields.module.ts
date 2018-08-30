import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { TooltipModule, BsDatepickerModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgSelectModule } from '@ng-select/ng-select';
import { NgxUploaderModule } from 'ngx-uploader';

import { TextboxComponent } from './components/textbox/textbox.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
// import { AddressComponent } from './components/address/address.component';
// import { FormGroupWrapperComponent } from '../shared/form-group-wrapper/form-group-wrapper.component';
import { AddressFieldsComponent } from './components/address-fields/address-fields.component';
import { QuestionnaireComponent } from '../questionnaire/questionnaire.component';
import { SectionComponent } from '../section/section.component';
import { TaskContainerComponent } from '../task-container/task-container.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyBootstrapModule,
    NgSelectModule,
    NgxUploaderModule,
    NgbModule.forRoot(),
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'server-error', message: (err) => err }
      ],
      types: [
        { name: 'custom-checkbox', component: CheckboxComponent },
        { name: 'custom-dropdown', component: DropdownComponent },
        { name: 'custom-radio-button', component: RadiobuttonComponent },
        { name: 'typeahead', component: AutoCompleteComponent, extends: 'input' },
        { name: 'custom-datepicker', component: DatePickerComponent },
      // { name: 'custom-address-field', component: AddressComponent },
        { name: 'custom-textbox', component: TextboxComponent },
        // { name: 'custom-datepicker', component: DatePickerComponent },
        { name: 'repeatAddressData', component: AddressFieldsComponent },
        { name: 'custom-textbox', component: TextboxComponent }
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
    // AddressComponent,
    QuestionnaireComponent,
    SectionComponent,
    TaskContainerComponent,
    UploadFileComponent,
    TextboxComponent,
    AddressFieldsComponent
  ],
  exports: [
    DropdownComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    AutoCompleteComponent,
    DatePickerComponent,
    // AddressComponent,
    QuestionnaireComponent,
    SectionComponent,
    TaskContainerComponent,
    UploadFileComponent,
    TextboxComponent,
    AddressFieldsComponent
  ]
})
export class CustomFormlyFieldsModule { }
