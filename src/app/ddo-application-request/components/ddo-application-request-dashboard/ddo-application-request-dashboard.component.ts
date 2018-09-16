import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromRootReducers, fromRootSelectors } from '../../../store';
import { ContactDetailsModel } from '../../../core/models/contact-detail.model';
import { showcaseArrayElements } from '../../../core/utilities/array.utility';
import { Step, StepViewModel } from '../../../core/view-model/stepper-step.model';

@Component({
  selector: 'ddo-application-request-dashboard',
  templateUrl: './ddo-application-request-dashboard.component.html',
  styleUrls: ['./ddo-application-request-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DdoApplicationRequestDashboardComponent {
  application: any;
  contactPersonDetails$: any;
  productsDescription: string;
  accountHoldersDescription: string;
  stepperSteps: Array<Step>;
  constructor(private store: Store<fromRootReducers.AppState>) {
    this.store.select(fromRootSelectors.applicationRequestSelectors.getApplicaiton)
      .subscribe((application: any) => {
        this.application = application;
        this.productsDescription = this.application.products.join(', ');
        this.accountHoldersDescription = showcaseArrayElements(this.application.accountHolders);
        const workflowGroups = [ ...this.application.workflowsGroups ];
        this.stepperSteps = workflowGroups.map((group, index) => {
          const showLine = index > 0;
          return new StepViewModel({ ...group, showLine});
        });
      });
    this.store.select(fromRootSelectors.userSelectors.getUserContactPerson)
      .subscribe((contactDetail: any) => {
        this.contactPersonDetails$ = new ContactDetailsModel(contactDetail);
      });
  }
  editClick() {
    console.log('edit clicked');
  }
  cancelApplication() {
    console.log('cancelling the application');
  }
  routeToTask(item) {
    console.log(item.routingInformation);
  }
}
