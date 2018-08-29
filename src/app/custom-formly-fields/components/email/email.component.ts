import { Component, OnInit, OnChanges } from '@angular/core';
import { FormlyFormBuilder, FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent extends FieldArrayType implements OnInit, OnChanges {
  questionType: string = "custom-email";
  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }

}
