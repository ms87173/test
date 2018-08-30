import { FormlyFieldConfig } from '@ngx-formly/core';

export const PhoneFieldConfig: FormlyFieldConfig = {
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
                    options: []
                },
            },
            {
                type: 'custom-textbox',
                key: 'homePhone',
                className: 'col-sm-6',
                templateOptions: {
                    label: 'Home Phone Number',
                },
            },
            {
                type: 'custom-checkbox',
                key: 'setAsPrimary',
                className: 'col-sm-12',
                templateOptions: {
                    label: 'Use this number as primary contact',
                    required: true
                },
            },
            {
                type: 'custom-checkbox',
                key: 'setForBanking',
                className: 'col-sm-12 no-pad-top',
                templateOptions: {
                    label: 'Use this number for approving banking activity',
                    required: true
                },
            }
        ],
        templateOptions: {
            btnText: '+ Add a new phone Number'
        }
    }
};

