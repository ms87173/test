import { Component, OnInit, OnChanges, ViewEncapsulation } from '@angular/core';
import { FormlyFormBuilder, FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmailComponent extends FieldArrayType implements OnInit, OnChanges {
  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }

}
