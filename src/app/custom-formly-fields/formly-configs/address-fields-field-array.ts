import { FormlyFieldConfig } from '@ngx-formly/core';

export const AddressFieldsFieldArray: FormlyFieldConfig = {
    fieldGroupClassName: 'row',
    fieldGroup: [
        {
            key: 'addressDescription',
            className: 'col-sm-12 mt-2',
            type: 'custom-dropdown',
            templateOptions: {
                required: true,
                label: 'Address Description',
                options: [// TODO: what are all the values and the structure of options
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
            type: 'custom-textbox',
            className: 'col-sm-6 mt-2',
            templateOptions: {
                label: 'State',
                required: true,
                hideRequiredMarker: true
            }
        },
        {
            key: 'country',
            type: 'custom-dropdown',
            className: 'col-sm-6 mt-2',
            templateOptions: {
                required: true,
                label: 'Country',
                options: [],
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
    }
};
