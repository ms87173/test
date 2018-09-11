import { Component, OnInit, ViewEncapsulation, OnDestroy, ChangeDetectorRef, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FormlyConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionnaireComponent implements OnInit {
  @Input() form = new FormGroup({});
  @Input() options: FormlyFormOptions = {};
  @Input() model: any = {};
  @Input() fields: FormlyFieldConfig[];
  constructor() {}
  ngOnInit() {
  }
  fieldChanged() {

  }
}
