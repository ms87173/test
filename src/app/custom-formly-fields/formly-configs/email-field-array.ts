import { FormlyFieldConfig } from "@ngx-formly/core";

export const emailFieldArray: FormlyFieldConfig = {
    fieldGroupClassName: 'row',
    fieldGroup: [
        {
            className: 'col-sm-12',
            type: 'custom-dropdown',
            key: 'description',
            templateOptions: {
                label: 'Email Description',
                required: true,
                options: [
                    { label: 'Home', value: 'home' },
                    { label: 'Work', value: 'work' },
                    { label: 'Phone', value: 'phone' }
                ],
                tooltip: null
            },
        },

        {
            type: 'custom-textbox',
            key: 'emailAddress',
            className: 'col-sm-12',
            templateOptions: {
                label: 'Email Address',
                tooltip: null
            },
        }

    ],
    templateOptions: {
        btnText: '+ Add a new email'
    }
}


