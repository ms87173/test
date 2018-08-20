import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromRootReducers, fromRootSelectors } from '../../../store';
import { ActivatedRoute } from '@angular/router';
import { GetApplicationRequest, GetApplicationRequestWorkflows } from '../../../store/actions/application-request.actions';
import WorkFlowsSideNavModel from '../../../core/models/workflow-sidenav.model';

@Component({
  selector: 'ddo-application-request',
  templateUrl: './ddo-application-request.component.html',
  styleUrls: ['./ddo-application-request.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DdoApplicationRequestComponent implements OnInit {
  id: any;
  application: any;
  workflows: any;
  selectedWorkflowId: string;
  selectedTaskId: string;

  constructor(
    private store: Store<fromRootReducers.AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.selectedWorkflowId = '1';
    this.selectedTaskId = '2';
    this.route.params.subscribe(params => {
      this.id = params.applicationId;
    })
    this.store.dispatch(new GetApplicationRequest(this.id));
    this.store.dispatch(new GetApplicationRequestWorkflows(this.id));
    this.store.select(fromRootSelectors.applicationRequestSelectors.getApplicaitonRequest).
      subscribe((application: any) => {
        this.application = application;
      });
    this.store.select(fromRootSelectors.applicationRequestSelectors.getApplicationRequestWorkflows)
      .subscribe((workflows: any) => {
        this.workflows = workflows.map((workflow) => new WorkFlowsSideNavModel(workflow));
        console.log(this.workflows);
      });
  }
  onSideNavClick(payload) {
    console.log(payload);
  }

}
