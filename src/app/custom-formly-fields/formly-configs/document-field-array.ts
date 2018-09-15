import { FormlyFieldConfig } from "@ngx-formly/core";

export const documentFieldArray: FormlyFieldConfig = {
    fieldGroupClassName: 'row',
    fieldGroup: [
        // {
        //     className: 'col-sm-12',
        //     type: 'custom-upload',
        //     key: 'description',
        //     templateOptions: {
        //         label: 'Document upload',
        //         required: true,
        //     },
        // },

        {
            className: 'col-sm-4',
            type: 'custom-dropdown',
            key: 'idCountry',
            templateOptions: {
                label: 'ID Country',
                required: false

            },
        },
        {
            className: 'col-sm-4',
            type: 'custom-textbox',
            key: 'idNumber',
            templateOptions: {
                label: 'ID Number (optional)',
                required: true

            },
        },
        {
            className: 'col-sm-4',
            type: 'custom-datepicker',
            key: 'expireDate',
            templateOptions: {
                label: 'Exp. Date',
                required: true

            },
        }

    ],
    templateOptions: {
        btnText: '+ Add a new document',
    }
}


