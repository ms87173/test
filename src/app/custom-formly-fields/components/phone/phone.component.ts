import { Component, OnInit, OnChanges } from '@angular/core';
import { FieldType, FieldArrayType, FormlyFormBuilder, FormlyConfig, FormlyFieldConfig } from '@ngx-formly/core';
@Component({
  selector: 'phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent extends FieldArrayType implements OnInit, OnChanges {

  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }

  ngOnInit() {
  }

}
