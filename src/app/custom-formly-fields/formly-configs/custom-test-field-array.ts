import { FormlyFieldConfig } from '@ngx-formly/core';

export const CustomTestFieldArray: FormlyFieldConfig = {
    fieldGroupClassName: 'row',
    fieldGroup: [
        {
            className: 'col-sm-4',
            type: 'input',
            key: 'investmentName',
            templateOptions: {
                label: 'Name of Investment:',
                required: true,
            },
        },
        {
            type: 'input',
            key: 'investmentDate',
            className: 'col-sm-4',
            templateOptions: {
                type: 'date',
                label: 'Date of Investment:',
            },
        },
        {
            type: 'input',
            key: 'stockIdentifier',
            className: 'col-sm-4',
            templateOptions: {
                label: 'Stock Identifier:',
                addonRight: {
                    class: 'fa fa-code'
                }
            }
        }
    ]
};
