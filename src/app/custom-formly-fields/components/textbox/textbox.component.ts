import { Component, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'textbox',
    templateUrl: './textbox.component.html',
    styleUrls: ['./textbox.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class TextboxComponent extends FieldType {
    get type() {
        return this.to.type || 'text';
    }
<<<<<<< HEAD
    // change(){

    //     if(this.field && this.field.validation && this.field.validation.show)
    //     {
    //         this.field.validation.show=false;
    //     }
    // }
=======
    change() {

        if (this.field && this.field.validation && this.field.validation.show) {
            this.field.validation.show = false;
        }
    }
>>>>>>> 5302510ff9ef96b64942e252e25a74f3dcd38a14
}
