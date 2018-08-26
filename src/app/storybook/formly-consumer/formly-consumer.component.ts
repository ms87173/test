import { Component, OnInit } from '@angular/core';
import { FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/distinctUntilChanged';
import { Observable } from 'rxjs/Observable';
// import { debounce } from 'rxjs/internal/operators/debounce';

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
  listData: any;
  fields;
 
  constructor() { }
  ngOnInit() {
// private fields: Array<FormlyFieldConfig> = [];
this.listData = ['Alabama', 'Alaska',];
this.fields = [
  {
    key: 'requiredCheckBox',
    type: 'customCheckbox',
    templateOptions: {
      label: 'Hey there you need to check this box as this is required',
      required: true,
    },
  },
  {
    key: 'requiredWithNoMarker',
    type: 'customCheckbox',
    templateOptions: {
      label: 'Hey there you need to check this box as this is required but i have no required marker ',
      required: true,
      hideRequiredMarker: true,
    },
  },
  {
    key: 'OptionalCheckbox',
    type: 'customCheckbox',
    templateOptions: {
      label: 'Hey there i am an optional checkbox. But please do not ignore me. ',
      hideRequiredMarker: true,
    },
  },
  {
    key: 'checkboxWithHelpText',
    type: 'customCheckbox',
    templateOptions: {
      label: 'I am a checkbox with little help text ',
      required: true,
      hideRequiredMarker: true,
      tooltip: {
        content: 'Hey this is tooltip',
        placement: 'right'
      }
    },
  },
  {
    key: 'marvel1',
    type: 'select',
    templateOptions: {
      label: 'Normal Select',
      options: [
        { label: 'Iron Man', value: 'iron_man' },
        { label: 'Captain America', value: 'captain_america' },
        { label: 'Black Widow', value: 'black_widow' },
        { label: 'Hulk', value: 'hulk' },
        { label: 'Captain Marvel', value: 'captain_marvel' },
      ],
    },
  },
  {
    key: 'marvel2',
    type: 'select',
    templateOptions: {
      label: 'Grouped Select',
      options: [
        { label: 'Iron Man', value: 'iron_man', group: 'Male' },
        { label: 'Captain America', value: 'captain_america', group: 'Male' },
        { label: 'Black Widow', value: 'black_widow', group: 'Female' },
        { label: 'Hulk', value: 'hulk', group: 'Male' },
        { label: 'Captain Marvel', value: 'captain_marvel', group: 'Female' },
      ],
    },
  },
  {
    key: 'marvel3',
    type: 'select',
    templateOptions: {
      label: 'Select with custom name/value/group',
      options: [
        { label: 'Iron Man', id: 'iron_man', gender: 'Male' },
        { label: 'Captain America', id: 'captain_america', gender: 'Male' },
        { label: 'Black Widow', id: 'black_widow', gender: 'Female' },
        { label: 'Hulk', id: 'hulk', gender: 'Male' },
        { label: 'Captain Marvel', id: 'captain_marvel', gender: 'Female' },
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
        { label: 'Iron Man', value: 'iron_man' },
        { label: 'Captain America', value: 'captain_america' },
        { label: 'Black Widow', value: 'black_widow' },
        { label: 'Hulk', value: 'hulk' },
        { label: 'Captain Marvel', value: 'captain_marvel' },
      ],
    },
  },
  {
    key: 'radioButtonText',
    type: 'radioButton',
    templateOptions: {
      label: 'Do you have a U.S. Social Security Number?',
      options: [
        {name: 'Yes', value: 'Yes', id: 0},
        {name: 'No', value: 'No', id: 1},
      ],
      valueProp: 'value',
      labelProp: 'name',
    },
  },
  // {   key: 'text',
  //     type: 'typeahead',
  //     templateOptions: {
  //       label: 'Username',
  //       options: (text$: Observable<string>) =>
  //         text$
  //         .distinctUntilChanged()
  //         .map(term => term.length < 2 ? []
  //           : this.listData.filter(v => new RegExp(term, 'gi').test(v)).splice(0, 10)),
  //     },
  //   },
];

  }
}
