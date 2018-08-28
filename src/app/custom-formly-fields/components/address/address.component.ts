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

  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }

  ngOnInit() {}
}
