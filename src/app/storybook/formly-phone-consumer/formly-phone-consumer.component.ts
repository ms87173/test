import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'formly-phone-consumer',
  templateUrl: './formly-phone-consumer.component.html',
  styleUrls: ['./formly-phone-consumer.component.css']
})
export class FormlyPhoneConsumerComponent implements OnInit {
  form = new FormGroup({});
  model: any = {
    phone: [{}]
  };
  options: FormlyFormOptions = {};
  fields: Array<any>;
  stateData: any;
  constructor(
  ) { }

  ngOnInit() {
    this.fields = [
      {
        key: 'phone',
        type: 'custom-phone',
        fieldArray: {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-sm-12',
              type: 'custom-dropdown',
              key: 'description',
              templateOptions: {
                label: 'Phone Description',
                required: true,
                options: [
                  { label: 'Home', value: 'home' },
                  { label: 'Work', value: 'work' },
                  { label: 'Phone', value: 'phone' }
                ]
              },
            },
            {
              type: 'custom-dropdown',
              key: 'countryCode',
              className: 'col-sm-6',
              templateOptions: {
                label: 'Country Code',
                options: this.getCountryCode()
              },
            },
            {
              type: 'custom-textbox',
              key: 'homePhone',
              className: 'col-sm-6',
              templateOptions: {
                label: 'Home Phone Number',
              },
              {
              type: 'custom-checkbox',
              key: 'setAsPrimary',
              className: 'col-sm-12',
              templateOptions: {
                label: 'Use this number as primary contact',
              },
            },
            {
              type: 'custom-checkbox',
              key: 'setForBanking',
              className: 'col-sm-12',
              templateOptions: {
                label: 'Use this number for approving banking activity',
              },
            }
          ],
          templateOptions: {
            btnText: '+ Add a new address'
          },
          recurrent: true
        }
      }
    ];
    console.log(this.fields)
  }
  getCountryCode() {
    return [
      {
        label: '+91',
        value: '+91'
      },
      {
        label: '+1',
        value: '+1'
      },
      {
        label: '+111',
        value: '+111'
      },
      {
        label: '+123',
        value: '+123'
      },
      {
        label: '+133',
        value: '+133'
      },
      {
        label: '+144',
        value: '+144'
      },
      {
        label: '+155',
        value: '+155'
      },
    ];
  }
}
