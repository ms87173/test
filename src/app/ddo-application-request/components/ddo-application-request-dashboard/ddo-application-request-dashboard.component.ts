import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromRootReducers, fromRootSelectors } from '../../../store';
import { ContactDetailsModel } from '../../../core/models/contact-detail.model';
import { showcaseArrayElements } from '../../../core/utilities/array.utility';
import { Step, StepViewModel } from '../../../core/view-model/stepper-step.model';
import { SetActiveTask } from '../../../store/actions/workflows.action';
import { RouterGo } from '../../../store/actions/router.actions';
import { APPLICATIONS_STATUS } from '../../../core/constants/applications.constants';

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
  showTitleEditable: boolean;
  titleValue: string;
  showEditButton: boolean;
  constructor(private store: Store<fromRootReducers.AppState>) {
    this.store.select(fromRootSelectors.applicationRequestSelectors.getApplicationActiveTask)
      .subscribe((activeTaskData: any) => {
        const currentTaskId = activeTaskData.task.id;
        const currentWorkflowId = activeTaskData.workflowId;
        const currentTaskType = activeTaskData.task.type;
        // this.initalRender = !(this.currentTaskId$ && this.currentWorkflowId$);
        if (
          currentTaskId &&
          currentWorkflowId &&
          currentTaskType &&
          this.application &&
          this.application.id
        ) {
          this.store.dispatch(
            new RouterGo({
              path: ['ddo', 'applications', this.application.id, 'tasks']
            })
          );
        }
      });
    this.store.select(fromRootSelectors.applicationRequestSelectors.getApplicaiton)
      .subscribe((application: any) => {
        this.showEditButton = application &&
          application.status &&
          !(application.status.code === APPLICATIONS_STATUS.cancelled ||
          application.status.code === APPLICATIONS_STATUS.onHold);
        this.showTitleEditable = false;

        this.application = application;
        this.titleValue = this.application.title;
        this.productsDescription = this.application.products.join(', ');
        this.accountHoldersDescription = showcaseArrayElements(this.application.accountHolders);
        const workflowGroups = [ ...this.application.workflowGroups ];
        this.stepperSteps = workflowGroups.map((group, index) => {
          const showLine = index > 0;
          return new StepViewModel({ ...group, showLine });
        });
      });
    this.store.select(fromRootSelectors.userSelectors.getUserContactPerson)
      .subscribe((contactDetail: any) => {
        this.contactPersonDetails$ = new ContactDetailsModel(contactDetail);
      });
  }
  routeToTask(item) {
    //console.log(item.routingInformation);
    this.store.dispatch(
      new SetActiveTask({
        workflowId: item.routingInformation.workflowId,
        taskId: item.routingInformation.taskId
      })
    );
  }
  editTitle() {
    this.showTitleEditable = true;
  }
  discardTitle() {
    this.showTitleEditable = false;
    this.titleValue = this.application.title;
  }
  saveTitle() {
    this.showTitleEditable = false;
    //console.log('title is saved');
  }
}
