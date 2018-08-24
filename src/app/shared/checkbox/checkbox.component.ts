import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends FieldType implements OnInit {

  ngOnInit() {
  }

}

