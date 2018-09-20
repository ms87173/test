import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterGo } from '../../../store/actions/router.actions';
import { fromRootReducers, fromRootSelectors } from '../../../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ddo-application-request-success',
  templateUrl: './ddo-application-request-success.component.html',
  styleUrls: ['./ddo-application-request-success.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DdoApplicationRequestSuccessComponent implements OnInit {
  steps: any;
  application: any;
  constructor(private store: Store<fromRootReducers.AppState>) {
    this.store.select(fromRootSelectors.applicationRequestSelectors.getApplicaiton)
      .subscribe((application: any) => {
        this.application = application;
      });
  }

  ngOnInit() {
    this.steps = [
      {
        name: 'You',
        iconClass: 'fa-user-o',
        showLine: false,
        tooltipItems: ['Task 1_1', 'Task 1_2'],
        showTooltip: true,
        status: 'completed',
        statusIconClass: 'fa-check',
        stepCssClass: 'step-circle--completed',
        disabled: false
      },
      {
        name: 'Jane',
        iconClass: 'fa-user-o',
        showLine: true,
        tooltipItems: ['Task 2_1', 'Task 2_2'],
        showTooltip: true,
        status: 'pending',
        stepCssClass: 'step-circle--active',
        disabled: false
      },
      {
        name: 'Susan',
        iconClass: 'fa-user-o',
        tooltipItems: ['Task 3_1', 'Task 3_2'],
        showTooltip: true,
        status: 'not-started',
        stepCssClass: 'step-circle--disabled',
        showLine: true,
        disabled: false,
        lineCssClass: 'solid-grey-line'
      },
      {
        name: 'Banker',
        iconClass: 'fa-user-o',
        tooltipItems: ['Task 4_1', 'Task 4_2'],
        showTooltip: false,
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
