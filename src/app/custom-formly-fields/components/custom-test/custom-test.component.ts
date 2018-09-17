import { Component, OnInit } from '@angular/core';
import { FieldType, FormlyFormBuilder, FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'custom-test',
  templateUrl: './custom-test.component.html',
  styleUrls: ['./custom-test.component.css']
})
export class CustomTestComponent extends FieldArrayType implements OnInit {

  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }

  ngOnInit() {
  }

}
