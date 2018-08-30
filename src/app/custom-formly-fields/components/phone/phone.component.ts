import { Component, OnInit, OnChanges, ViewEncapsulation } from '@angular/core';
import {  FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';
@Component({
  selector: 'phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PhoneComponent extends FieldArrayType implements OnInit, OnChanges {

  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }

  ngOnInit() {
  }

}
