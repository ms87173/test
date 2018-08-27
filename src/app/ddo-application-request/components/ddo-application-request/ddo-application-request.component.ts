import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromRootReducers, fromRootSelectors } from '../../../store';
import { ActivatedRoute } from '@angular/router';
import { DeterminePendingTaskOfApplication } from '../../../store/actions/workflows.action';
import WorkFlowsSideNavModel from '../../../core/models/workflow-sidenav.model';
import { APPLICATION_HEADING } from '../../../core/constants/application-request.constants';
import { ContactDetailsModel } from '../../../core/models/contact-detail.model';
import { RouterGo } from '../../../store/actions/router.actions';

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
  initalRender: boolean = true;
  constructor(
    private store: Store<fromRootReducers.AppState>
  ) { }

  ngOnInit() {
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
        if(this.initalRender && this.workflows && this.workflows.length > 0) {
          this.store.dispatch(new DeterminePendingTaskOfApplication(this.workflows));
        }
      });
    this.store.select(fromRootSelectors.applicationRequestSelectors.getApplicationActiveTask)
      .subscribe((activeTaskData: any) => {
        this.selectedTaskId = activeTaskData.taskId;
        this.selectedWorkflowId = activeTaskData.workflowId;
        this.initalRender = this.selectedTaskId && this.selectedWorkflowId ? false : true;
      });
  }

  onSideNavClick(payload) {
    this.selectedTaskId = payload.childId;
    this.selectedWorkflowId = payload.parentId;
    this.store.dispatch(
      new RouterGo({
        path: ['applications', payload.childId ],
      }
      )
    );
    console.log(payload)
    console.log(this.selectedTaskId, this.selectedWorkflowId);
  }

}