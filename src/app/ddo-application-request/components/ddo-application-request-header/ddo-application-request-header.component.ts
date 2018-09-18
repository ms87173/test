import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions } from '@ngx-formly/core';
import { CANCELLATION_REASONS } from '../../../core/constants/application-request.constants';
import { CancelApplicationRequest } from '../../../store/actions/application.actions';
import { Store } from '@ngrx/store';
import { fromRootReducers, fromRootSelectors } from '../../../store';
import { DynamicOptionsService } from '../../../core';
import { APPLICATIONS_STATUS } from '../../../core/constants/applications.constants';

@Component({
  selector: 'ddo-application-request-header',
  templateUrl: './ddo-application-request-header.component.html',
  styleUrls: ['./ddo-application-request-header.component.scss']
})
export class DdoApplicationRequestHeaderComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: Array<any>;
  @Input() showCancellationForm: any;
  application$: any;
  applicationStatuses: any;
  constructor(private store: Store<fromRootReducers.AppState>,
    public dynamicOptionsService: DynamicOptionsService ) {
    this.store.select(fromRootSelectors.applicationRequestSelectors.getApplicaiton).
      subscribe((application: any) => {
        this.application$ = application;
      });
    this.applicationStatuses = APPLICATIONS_STATUS;
  }

  ngOnInit() {
    this.fields = this.getCancelApplicationFormFields();
  }
  getCancelApplicationFormFields() {
    return [
      {
        key: 'reason',
        type: 'custom-dropdown',
        templateOptions: {
          label: 'Please select the reason for cancellation',
          hideRequiredMarker: true,
          required: true,
          options: this.dynamicOptionsService.getDynamicOptions('CancelReason')
        },
      },
      {
        key: 'comments',
        type: 'textarea',
        hideExpression: (model) => this.model.reason !== 'Other',
        templateOptions: {
          label: 'Additional Comments',
          rows: 3,
          cols: 15,
          required: false,
        },
      },
    ];
  }
  cancelApplication() {
    this.showCancellationForm = true;
  }

  hideCancelAppicationForm() {
    this.showCancellationForm = false;
  }
  cancelApplicationRequest() {
    const data = {
      requestId: this.application$.id,
      reasonForCancellation: this.model.reason,
      comment: this.model.comment
    }
    this.store.dispatch(new CancelApplicationRequest(data));
  }
}
