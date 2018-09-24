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
import { EmailComponent } from './components/email/email.component';
import { CustomComponentsEnum } from './enums/custom-components.enum';
import { PhoneComponent } from './components/phone/phone.component';
import { ModalModule } from 'ngx-bootstrap';
import { FormlySelectOptionsPipe } from './pipes/select-options.pipe';

// import { FormUploadComponent } from './components/upload/form-upload/form-upload.component';

// import { DetailsUploadComponent } from './components/upload/details-upload/details-upload.component';
import { DocumentUploadComponent } from './components/document-upload/document-upload.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { CustomTestComponent } from './components/custom-test/custom-test.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyBootstrapModule,
    NgSelectModule,
    NgxUploaderModule,
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    FormlyModule.forRoot({
      validationMessages: [
        // { name: 'server-error', message: errorMessage },
        { name: 'required', message: (err, field) => `${field.templateOptions.label} is required.`}
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
        { name: CustomComponentsEnum.CUSTOM_DOCUMENT_UPLOAD, component: DocumentUploadComponent },
        { name: CustomComponentsEnum.CUSTOM_UPLOAD, component: UploadFileComponent },
        { name: CustomComponentsEnum.CUSTOM_TEST, component: CustomTestComponent },
        { name: CustomComponentsEnum.CUSTOM_DYNAMIC_DROP, component: DropdownComponent }
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
    DocumentUploadComponent,
    QuestionnaireComponent,
    SectionComponent,
    UploadFileComponent,
    TextboxComponent,
    PhoneComponent,
    AddressFieldsComponent,
    EmailComponent,
    FormlySelectOptionsPipe,
    CustomTestComponent,
    // FormUploadComponent,
    // DetailsUploadComponent,
  ],
  exports: [
    DropdownComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    AutoCompleteComponent,
    DatePickerComponent,
    DocumentUploadComponent,
    QuestionnaireComponent,
    SectionComponent,
    UploadFileComponent,
    TextboxComponent,
    AddressFieldsComponent,
    EmailComponent,
    PhoneComponent,
    FormlySelectOptionsPipe
  ]
})
export class CustomFormlyFieldsModule {

 }

 // tslint:disable-next-line:no-shadowed-variable
 export function errorMessage(errorMessage: string) {
   return errorMessage;
 }
