import { Component } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';

@Component({
  selector: 'formly-repeat-section',
  template: ` {{to.label}}
  <div class="formly-textbox form-group">
  <label class="formly-textbox__label" [for]="id">
      {{to.label}}
      <span class="float-right">
          <span *ngIf='!to.required' class="ml-4">(optional)</span>
          <i *ngIf="to.tooltip"
              class="control-label-help fa fa-question-circle-o ml-3"
              containerClass="{{to.tooltip.containerClass}}"
              tooltip="{{to.tooltip.content}}"
              placement="{{to.tooltip.placement}}"></i>
      </span>
  </label>
  <input class="form-control"
      [type]="type"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [class.is-invalid]="showError">
</div>
  `,
})
export class RepeatTypeComponent extends FieldArrayType {
  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */