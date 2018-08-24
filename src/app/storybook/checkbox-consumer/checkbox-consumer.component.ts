import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'checkbox-consumer',
  templateUrl: './checkbox-consumer.component.html',
  styleUrls: ['./checkbox-consumer.component.scss']
})
export class CheckboxConsumerComponent implements OnInit {

  constructor() { }
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'customCheckbox',
      templateOptions: {
        label: 'Do you agree Terms and condition',
        required: true,
        hideRequiredMarker: true,
        placeholder: 'Formly is terrific!',
        tooltip: {
          content: 'Hey this is tooltip',
          placement: 'right'
        }
      },
    },
  ];
  ngOnInit() {
  }

}
