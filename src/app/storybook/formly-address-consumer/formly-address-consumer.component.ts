import { Component, OnInit } from '@angular/core';
import { FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { takeUntil, startWith, tap } from 'rxjs/operators';
import { Subject, Observable, of } from 'rxjs';
import { DynamicOptionsService } from '../../core/services/dynamic-options.service';

@Component({
  selector: 'formly-address-consumer',
  templateUrl: './formly-address-consumer.component.html',
  styleUrls: ['./formly-address-consumer.component.scss']
})

export class FormlyAddressConsumerComponent implements OnInit {
  onDestroy$ = new Subject<void>();
  form = new FormGroup({});
  model: any = {
    addresses: [{}]
  };
  options: FormlyFormOptions = {};
  fields: Array<any>;
  stateData: any;

  constructor(private dynamicOptionsService: DynamicOptionsService) { }

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
                options: [// HARDCODED: what are all the values and the structure of options
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
                label: `Is your home/legal address the same as the primary account holder's address?`,
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
              type: 'custom-dropdown',
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
                      if (country) {
                        const url = country === 'USA' ? 'usa-states' : 'indian-states';
                        field.templateOptions.options = this.dynamicOptionsService.getDynamicOptions(url);
                      }
                    }),
                  ).subscribe();
                },
              },
            },
            {
              key: 'country',
              type: 'custom-dropdown',
              className: 'col-sm-6 mt-2',
              templateOptions: {
                required: true,
                label: 'Country',
                options: this.dynamicOptionsService.getDynamicOptions('Countries'),
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
                label: 'Would you like to use this address as your mailing address?',
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
            btnText: '+ Add a new address',
            heading: 'Addresses'
          },
          recurrent: true
        }
      }
    ];
  }
}
