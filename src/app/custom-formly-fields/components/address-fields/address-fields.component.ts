import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'address-fields',
  templateUrl: './address-fields.component.html',
  styleUrls: ['./address-fields.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AddressFieldsComponent extends FieldType implements OnInit{
    
}
