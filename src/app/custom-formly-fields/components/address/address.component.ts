import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FieldType, FieldArrayType, FormlyFormBuilder, FormlyConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { fromRootReducers } from '../../../store';
import { Store } from '@ngrx/store';
import { questionnaireActions } from '../../../store/actions';
import { QuestionaireDeltaRequest } from '../../../core';

@Component({
  selector: 'address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent extends FieldArrayType  implements OnInit, OnChanges {
  questionType: string = "address";

  constructor(builder: FormlyFormBuilder, 
    // private fb: FormBuilder,
    // private store: Store<fromRootReducers.AppState>
  ) {
    super(builder);
   
  }

  ngOnInit() {


    // this.model[this.field.key] = [];
    // if (this.field.defaultValue) {
    //   this.field.defaultValue.forEach(item => {
    //     this.model[this.field.key].push(
    //       {
    //         address1: item.address1,
    //         address2: item.address2
    //       }
    //     );

    //   });
    // }
    // else {
    //   this.model[this.field.key] = [{
    //     address1: "",
    //     address2: ""
    //   }];


    // }





  }
  addRows() {
    // this.model[this.field.key].push({
    //   address1: "",
    //   address2: ""

    // })
  }

  removeRows() {
    // if (this.model[this.field.key].length > 1) {
    //   this.model[this.field.key].pop();
    // }
  }
  addressChanged(index) {

    // if (this.model[this.field.key] &&
    //   this.model[this.field.key][index].address1 &&
    //   this.model[this.field.key][index].address2) {
    //   console.log("Action raised ");
    // this.store.dispatch(new questionnaireActions.GetCurrentFieldChangeDelta(
    //  {
    //     model:this.model[this.field.key][index],
    //     questionId:this.field.id,
    //     questionType:this.questionType
    //   }
    // ));



    // }
  }




}
