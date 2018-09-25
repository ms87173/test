import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormlyFormBuilder, FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'recurrent-wrapper',
  templateUrl: './recurrent-wrapper.component.html',
  styleUrls: ['./recurrent-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RecurrentWrapperComponent extends FieldArrayType implements OnInit {
  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }
}
