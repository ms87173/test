import { Component, OnInit } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';

import { takeUntil, startWith, tap } from 'rxjs/operators';
import { Subject, Observable, of } from 'rxjs';

@Component({
  selector: 'formly-address-consumer',
  templateUrl: './formly-address-consumer.component.html',
  styleUrls: ['./formly-address-consumer.component.scss']
})

export class FormlyAddressConsumerComponent implements OnInit {
  onDestroy$ = new Subject<void>();
  form = new FormGroup({});
  model: any = {
    addresses: [{}]//this is mandatory
  };
  options: FormlyFormOptions = {};
  fields: Array<any>;
  stateData: any;
  getStateData(country): Observable<any[]> {
    switch (country) {
      case 'India': return of([
        {
          value: 'Maharashtra',
          label: 'Maharashtra'
        },
        {
          value: 'Delhi',
          label: 'Delhi'
        },
        {
          value: 'Uttar Pradesh',
          label: 'Uttar Pradesh'
        }
      ]);
      case 'United States of America': return of([
        {
          value: 'Utah',
          label: 'Utah'
        },
        {
          value: 'Texas',
          label: 'Texas'
        }
      ]);
    }
  }
  getCountryData(): Observable<any[]> {
    return of([
      {
        label: 'India',
        value: 'India'
      },
      {
        label: 'United States of America',
        value: 'United States of America'
      }
    ])
  }
  constructor() { }

  ngOnInit() {
    this.fields = [
      {
        key: 'addresses',
        type: 'custom-address-fields',
        fieldArray: {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'addressDescription',
              className: 'col-sm-12 mt-2',
              type: 'custom-dropdown',
              templateOptions: {
                required: true,
                label: 'Address Description',
                options: [//TODO: what are all the values and the structure of options
                  {
                    label: 'Home Address',
                    value: 'homeAddress'
                  },
                  {
                    label: 'Legal Address',
                    value: 'legalAddress'
                  }
                ]
              }
            },
            {
              key: 'legalAndHomeAddressSame',
              type: 'custom-radio-button',
              className: 'col-sm-12 mt-2',
              templateOptions: {
                required: true,
                label: "Is your home/legal address the same as the primary account holder's address?",
                options: [
                  {
                    label: 'Yes',
                    value: true
                  },
                  {
                    label: 'No',
                    value: false
                  }
                ]
              }
            },
            {
              key: 'address1',
              type: 'custom-textbox',
              className: 'col-sm-12 mt-2',
              templateOptions: {
                required: true,
                label: 'Address 1',
              }
            },
            {
              key: 'address2',
              type: 'custom-textbox',
              className: 'col-sm-12 mt-2',
              templateOptions: {
                required: true,
                label: 'Address 2',
              }
            },
            {
              key: 'city',
              type: 'custom-textbox',
              className: 'col-sm-6 mt-2',
              templateOptions: {
                required: true,
                label: 'City',
              }
            },
            {
              key: 'postalCode',
              type: 'custom-textbox',
              className: 'col-sm-6 mt-2',
              templateOptions: {
                required: true,
                label: 'Postal Zip',
              }
            },
            {
              key: 'state',
              type: 'select',
              className: 'col-sm-6 mt-2',
              templateOptions: {
                label: 'State',
                required: true,
                hideRequiredMarker: true,
                options: []
              },
              lifecycle: {
                onInit: (form, field) => {
                  form.get('country').valueChanges.pipe(
                    takeUntil(this.onDestroy$),
                    startWith(form.get('country').value),
                    tap(country => {
                      field.formControl.setValue('');
                      if(country) {
                        field.templateOptions.options = this.getStateData(country);
                        field.formControl.setValue('');
                      }
                    }),
                  ).subscribe();
                },
              },
            },
            {
              key: 'country',
              type: 'select',
              className: 'col-sm-6 mt-2',
              templateOptions: {
                required: true,
                label: 'Country',
                options: this.getCountryData(),
                hideRequiredMarker: true
              }
            },
            {
              key: 'addressSince',
              type: 'custom-datepicker',
              className: 'col-sm-12 mt-2',
              templateOptions: {
                label: 'Address Since',
                required: true
              }
            },
            {
              key: 'mailingAddress',
              type: 'custom-radio-button',
              className: 'col-sm-12 mt-2',
              templateOptions: {
                required: true,
                label: "Would you like to use this address as your mailing address?",
                options: [
                  {
                    label: 'Yes',
                    value: true
                  },
                  {
                    label: 'No',
                    value: false
                  }
                ]
              }
            }],
          templateOptions: {
            btnText: '+ Add a new address'
          },
          recurrent: true
        }
      }
    ];
  }
}
