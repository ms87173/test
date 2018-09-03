import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder  } from '@ngx-formly/core';

@Component({
  selector: 'address-fields',
  templateUrl: './address-fields.component.html',
  styleUrls: ['./address-fields.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AddressFieldsComponent extends FieldArrayType{
  constructor(builder: FormlyFormBuilder) {
    super(builder);
      }
}
// export class AddressFieldsComponent extends FieldArrayType implements OnInit {
//   constructor(builder: FormlyFormBuilder) {
//     super(builder);
//   }
//   ngOnInit() {
//     this.add();
//     console.log(this.field.fieldGroup[0].templateOptions.tooltip, ':::::Field');
//   }
// }
