import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
@Component({
  selector: 'app-form-group-wrapper',
  templateUrl: './form-group-wrapper.component.html',
  styleUrls: ['./form-group-wrapper.component.scss']
})
export class FormGroupWrapperComponent extends FieldWrapper {
  @ViewChild('fieldComponent', { read: ViewContainerRef }) fieldComponent: ViewContainerRef;
}
