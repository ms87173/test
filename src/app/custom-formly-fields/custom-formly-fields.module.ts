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
import { AddressFieldsComponent } from './components/address-fields/address-fields.component';
import { QuestionnaireComponent } from '../questionnaire/questionnaire.component';
import { SectionComponent } from '../section/section.component';
import { TaskContainerComponent } from '../task-container/task-container.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { EmailComponent } from './components/email/email.component';
import { CustomComponentsEnum } from './enums/custom-components.enum';
import { PhoneComponent } from './components/phone/phone.component';

import { FormlySelectOptionsPipe } from './pipes/select-options.pipe';
import { AddressProofComponent } from './components/address-proof/address-proof.component';

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
        { name: CustomComponentsEnum.CUSTOM_DROPDOWN, component: DropdownComponent },
        { name: CustomComponentsEnum.CUSTOM_RADIO_BUTTON, component: RadiobuttonComponent },
        { name: CustomComponentsEnum.CUSTOM_TYPEAHEAD, component: AutoCompleteComponent, extends: 'input' },
        { name: CustomComponentsEnum.CUSTOM_DATEPICKER, component: DatePickerComponent },
        { name: CustomComponentsEnum.CUSTOM_ADDRESS_FIELDS, component: AddressFieldsComponent },
        { name: CustomComponentsEnum.CUSTOM_TEXTBOX, component: TextboxComponent },
        { name: CustomComponentsEnum.CUSTOM_EMAIL, component: EmailComponent },
        { name: CustomComponentsEnum.CUSTOM_PHONE, component: PhoneComponent },
        { name: CustomComponentsEnum.CUSTOM_CHECKBOX, component: CheckboxComponent },
        { name: CustomComponentsEnum.CUSTOM_ADDRESS_PROOF, component: AddressProofComponent },
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
    AddressProofComponent,
    QuestionnaireComponent,
    SectionComponent,
    TaskContainerComponent,
    UploadFileComponent,
    TextboxComponent,
    PhoneComponent,
    AddressFieldsComponent,
    EmailComponent,
    FormlySelectOptionsPipe
  ],
  exports: [
    DropdownComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    AutoCompleteComponent,
    DatePickerComponent,
    AddressProofComponent,
    QuestionnaireComponent,
    SectionComponent,
    TaskContainerComponent,
    UploadFileComponent,
    TextboxComponent,
    AddressFieldsComponent,
    EmailComponent,
    PhoneComponent,
    FormlySelectOptionsPipe
  ]
})
export class CustomFormlyFieldsModule { }
