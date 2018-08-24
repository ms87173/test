import { FormlyFieldConfig } from "@ngx-formly/core";

export class FormlyFieldConfigArrayCollection {
    title?:string;
    formlyFieldConfigs: FormlyFieldConfig[];
    constructor(formlyFieldConfigs: FormlyFieldConfig[], title:string="") {
        this.formlyFieldConfigs = formlyFieldConfigs;
        this.title=title;
    }


}
