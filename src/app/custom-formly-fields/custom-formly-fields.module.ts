import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { TooltipModule, BsDatepickerModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TextboxComponent } from './components/textbox/textbox.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { AddressComponent } from './components/address/address.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormGroupWrapperComponent } from '../shared/form-group-wrapper/form-group-wrapper.component';
import { QuestionnaireComponent } from '../questionnaire/questionnaire.component';
import { SectionComponent } from '../section/section.component';
import { TaskContainerComponent } from '../task-container/task-container.component';
import { NgxUploaderModule } from 'ngx-uploader';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { EmailComponent } from './components/email/email.component';
import { CustomComponentsEnum } from './enums/custom-components.enum';
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
      wrappers: [
        { name: 'form-group', component: FormGroupWrapperComponent },
      ],
      validationMessages: [
        { name: 'server-error', message: (err) => err }
      ],
      types: [
        { name: CustomComponentsEnum.CUSTOM_CHECKBOX, component: CheckboxComponent },
        { name: CustomComponentsEnum.CUSTOM_DROPDOWN, component: DropdownComponent },
        { name: CustomComponentsEnum.CUSTOM_RADIO_BUTTON, component: RadiobuttonComponent },
        { name: CustomComponentsEnum.CUSTOM_TYPEAHEAD, component: AutoCompleteComponent, extends: 'input' },
        { name: CustomComponentsEnum.CUSTOM_DATEPICKER, component: DatePickerComponent },
        { name: CustomComponentsEnum.CUSTOM_ADDRESS_FIELD, component: AddressComponent },
        { name: CustomComponentsEnum.CUSTOM_TEXTBOX, component: TextboxComponent },
        { name: CustomComponentsEnum.CUSTOM_EMAIL, component: EmailComponent }

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
    TaskContainerComponent,
    UploadFileComponent,
    TextboxComponent,
    EmailComponent
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
    TaskContainerComponent,
    UploadFileComponent,
    TextboxComponent,
    EmailComponent

  ]
})
export class CustomFormlyFieldsModule { }
