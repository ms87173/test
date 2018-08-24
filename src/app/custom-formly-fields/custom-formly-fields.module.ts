import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { TooltipModule } from 'ngx-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'custom-checkbox', component: CheckboxComponent },
      ]
    }),
    FormlyBootstrapModule,
    TooltipModule.forRoot()
  ],
  declarations: [DropdownComponent, CheckboxComponent]
})
export class CustomFormlyFieldsModule { }
