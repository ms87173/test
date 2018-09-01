import { Component, OnInit } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder  } from '@ngx-formly/core';
@Component({
  selector: 'address-proof',
  templateUrl: './address-proof.component.html',
  styleUrls: ['./address-proof.component.scss']
})
export class AddressProofComponent extends FieldArrayType implements OnInit {
  constructor(builder: FormlyFormBuilder) {
    super(builder);
      }
  ngOnInit() {
    console.log(this.field.fieldArray, ':::Arrray');
    this.add();
  }

}
