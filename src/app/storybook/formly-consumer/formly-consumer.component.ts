import { Component, OnInit } from '@angular/core';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-formly-consumer',
  templateUrl: './formly-consumer.component.html',
  styleUrls: ['./formly-consumer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormlyConsumerComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: Array<FormlyFieldConfig> = [
    {
      key: 'marvel1',
      type: 'select',
      templateOptions: {
        label: 'Normal Select',
        options: [
          {label: 'Iron Man', value: 'iron_man'},
          {label: 'Captain America', value: 'captain_america'},
          {label: 'Black Widow', value: 'black_widow'},
          {label: 'Hulk', value: 'hulk'},
          {label: 'Captain Marvel', value: 'captain_marvel'},
        ],
      },
    },
    {
      key: 'marvel2',
      type: 'select',
      templateOptions: {
        label: 'Grouped Select',
        options: [
          {label: 'Iron Man', value: 'iron_man', group: 'Male'},
          {label: 'Captain America', value: 'captain_america', group: 'Male'},
          {label: 'Black Widow', value: 'black_widow', group: 'Female'},
          {label: 'Hulk', value: 'hulk', group: 'Male'},
          {label: 'Captain Marvel', value: 'captain_marvel', group: 'Female'},
        ],
      },
    },
    {
      key: 'marvel3',
      type: 'select',
      templateOptions: {
        label: 'Select with custom name/value/group',
        options: [
          {label: 'Iron Man', id: 'iron_man', gender: 'Male'},
          {label: 'Captain America', id: 'captain_america', gender: 'Male'},
          {label: 'Black Widow', id: 'black_widow', gender: 'Female'},
          {label: 'Hulk', id: 'hulk', gender: 'Male'},
          {label: 'Captain Marvel', id: 'captain_marvel', gender: 'Female'},
        ],
        groupProp: 'gender',
        valueProp: 'id',
        labelProp: 'label',
      },
    },
    {
      key: 'multiselect',
      type: 'select',
      templateOptions: {
        label: 'Multi-select',
        multiple: true,
        options: [
          {label: 'Iron Man', value: 'iron_man'},
          {label: 'Captain America', value: 'captain_america'},
          {label: 'Black Widow', value: 'black_widow'},
          {label: 'Hulk', value: 'hulk'},
          {label: 'Captain Marvel', value: 'captain_marvel'},
        ],
      },
    },
  ];
  constructor() {}
  ngOnInit() {
  }

}
