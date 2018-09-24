import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterGo } from '../../../store/actions/router.actions';
import { fromRootReducers, fromRootSelectors } from '../../../store';
import { Store } from '@ngrx/store';
import { APPLICATION_HEADING } from '../../../core/constants/application-request.constants';

@Component({
  selector: 'ddo-application-request-success',
  templateUrl: './ddo-application-request-success.component.html',
  styleUrls: ['./ddo-application-request-success.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DdoApplicationRequestSuccessComponent implements OnInit {
  steps: any;
  application: any;
  products: string[];
  accountTypeLabel: any;
  constructor(private store: Store<fromRootReducers.AppState>) {
    this.store.select(fromRootSelectors.applicationRequestSelectors.getApplicaiton)
      .subscribe((application: any) => {
        this.application = application;
        this.accountTypeLabel = this.application.accountType &&
          APPLICATION_HEADING[this.application.accountType];
        this.products = this.application.products;
      });
  }

  ngOnInit() {
    this.steps = [
      {
        name: 'John Robbins',
        iconClass: 'fa-check',
        showLine: false,
        stepCssClass: 'step-circle--completed',
        disabled: true
      },
      {
        name: 'Jane',
        iconClass: 'fa-user-o',
        showLine: true,
        status: 'pending',
        stepCssClass: 'step-circle--pending',
        disabled: false,
        lineCssClass: 'solid-grey-line'
      },
      {
        name: 'Susan',
        iconClass: 'fa-user-o',
        status: 'not-started',
        stepCssClass: 'step-circle--disabled',
        showLine: true,
        disabled: false,
        lineCssClass: 'solid-grey-line'
      },
      {
        name: 'Banker',
        iconClass: 'fa-user-o',
        status: 'not-started',
        stepCssClass: 'step-circle--disabled',
        showLine: true,
        disabled: true,
        lineCssClass: 'solid-grey-line'
      }
    ];
  }
  navigateTo() {
    this.store.dispatch(
      new RouterGo({
        path: ['ddo', 'my-applications']
      })
    );
  }
}
