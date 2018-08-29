import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
@Component({
  selector: 'radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RadiobuttonComponent extends FieldType {
  get labelProp(): string { return this.to.labelProp || 'label'; }
  get valueProp(): string { return this.to.valueProp || 'value'; }
}
