import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromRootReducers, fromRootSelectors } from '../../../store';
import { DeterminePendingTaskOfApplication } from '../../../store/actions/workflows.action';
import WorkFlowsSideNavModel from '../../../core/models/workflow-sidenav.model';
import { APPLICATION_HEADING } from '../../../core/constants/application-request.constants';
import { ContactDetailsModel } from '../../../core/models/contact-detail.model';

@Component({
  selector: 'ddo-application-request',
  templateUrl: './ddo-application-request.component.html',
  styleUrls: ['./ddo-application-request.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DdoApplicationRequestComponent implements OnInit {
  application: any;
  workflows: any;
  selectedWorkflowId: string;
  selectedTaskId: string;
  applicationHeading: any;
  heading: any;
  contactPersonDetails: any;

  constructor(
    private store: Store<fromRootReducers.AppState>
  ) { }

  ngOnInit() {
    this.selectedWorkflowId = '1';
    this.selectedTaskId = '2';
    this.applicationHeading = new Map(Object.entries(APPLICATION_HEADING));
    this.store.select(fromRootSelectors.applicationRequestSelectors.getApplicaiton).
      subscribe((application: any) => {
        this.application = application;
        this.heading = this.applicationHeading.get(this.application.type);
      });
    this.store.select(fromRootSelectors.userSelectors.getUserContactPerson).
      subscribe((contactDetail: any) => {
        this.contactPersonDetails = new ContactDetailsModel(contactDetail);
      });
    this.store.select(fromRootSelectors.applicationRequestSelectors.getApplicationWorkflows)
      .subscribe((workflows: any) => {
        this.workflows = workflows && workflows.map((workflow) => new WorkFlowsSideNavModel(workflow));
      });
    this.store.dispatch(new DeterminePendingTaskOfApplication(this.workflows));
  }
  onSideNavClick(payload) {
    console.log(payload);
  }

}
