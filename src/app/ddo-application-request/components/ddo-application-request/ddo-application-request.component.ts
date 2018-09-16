import { Component, OnInit, ViewEncapsulation, TemplateRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromRootReducers, fromRootSelectors } from '../../../store';
import {
  DeterminePendingTaskOfApplication,
  SetActiveTask,
  SaveActiveTaskAndExit,
  SaveActiveTaskAndNext
} from '../../../store/actions/workflows.action';
import WorkFlowsSideNavModel from '../../../core/models/workflow-sidenav.model';
import { APPLICATION_HEADING, CANCELLATION_REASONS, TASK_TYPES } from '../../../core/constants/application-request.constants';
import { ContactDetailsModel } from '../../../core/models/contact-detail.model';
import { RouterGo } from '../../../store/actions/router.actions';
import { FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { CancelApplicationRequest } from '../../../store/actions/application.actions';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ddo-application-request',
  templateUrl: './ddo-application-request.component.html',
  styleUrls: ['./ddo-application-request.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DdoApplicationRequestComponent {
  application$: any;
  workflows$: any;
  currentWorkflowId$: string;
  currentTaskId$: string;
  currentTaskType: string;
  nextTaskId$: string;
  nextWorkflowId$: string;
  previousTaskId$: string;
  previousWorkflowId$: string;
  firstTaskId$: string;
  lastTaskId$: string;
  applicationHeading: any;
  contactPersonDetails$: any;
  initalRender = true;
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: Array<any>;
  showCancellationForm: boolean;
  constructor(
    private store: Store<fromRootReducers.AppState>,
  ) {
    this.applicationHeading = new Map(Object.entries(APPLICATION_HEADING));

    this.store.select(fromRootSelectors.applicationRequestSelectors.getApplicaiton).
      subscribe((application: any) => {
        this.application$ = application;
      });

    this.store.select(fromRootSelectors.userSelectors.getUserContactPerson).
      subscribe((contactDetail: any) => {
        this.contactPersonDetails$ = new ContactDetailsModel(contactDetail);
      });

    this.store.select(fromRootSelectors.applicationRequestSelectors.getApplicationWorkflows)
      .subscribe((workflows: any) => {
        this.workflows$ = workflows && workflows.map((workflow) => new WorkFlowsSideNavModel(workflow));
        if (this.initalRender && workflows && workflows.length > 0) {
          // TODO: to avoid further dispatching when we re fetch the configuration
          this.store.dispatch(new DeterminePendingTaskOfApplication(workflows));
        }
      });

    this.store.select(fromRootSelectors.applicationRequestSelectors.getApplicationActiveTask)
      .subscribe((activeTaskData: any) => {
        this.currentTaskId$ = activeTaskData.task.id;
        this.currentWorkflowId$ = activeTaskData.workflowId;
        this.currentTaskType = activeTaskData.task.type;
        this.initalRender = !(this.currentTaskId$ && this.currentWorkflowId$);
        if (this.currentTaskId$ && this.currentTaskType) {
          this.store.dispatch(
            new RouterGo({
              // path: ['ddo', 'applications', this.application$.id, 'questionnaire'],
              path: ['ddo', 'applications', this.application$.id, 'tasks', this.currentTaskType]
            })
          );
        }
      });
    this.store.select(fromRootSelectors.applicationRequestSelectors.getApplicationNextTask)
      .subscribe((nextTaskData: any) => {
        this.nextTaskId$ = nextTaskData.task.id;
        this.nextWorkflowId$ = nextTaskData.workflowId;
      }
      );
    this.store.select(fromRootSelectors.applicationRequestSelectors.getApplicationPreviousTask)
      .subscribe((previousTaskData: any) => {
        this.previousTaskId$ = previousTaskData.task.id;
        this.previousWorkflowId$ = previousTaskData.workflowId;
      }
      );
    this.fields = this.getCancelApplicationFormFields();
  }

  onSideNavClick({ parentId, childId }) {
    this.store.dispatch(
      new SetActiveTask({
        workflowId: parentId,
        taskId: childId
      })
    );
  }
  buttonActionsClick(action: string) {
    switch (action) {
      case 'back':
        this.store.dispatch(
          new SetActiveTask({
            workflowId: this.previousWorkflowId$,
            taskId: this.previousTaskId$
          }));
        break;
      case 'cancel':
      case 'saveAndExit':
        this.store.dispatch(
          new SaveActiveTaskAndExit({
            workflowId: this.currentWorkflowId$,
            taskId: this.currentTaskId$
          }));
        break;
      case 'next':
        if (this.currentTaskType === TASK_TYPES.QUESTION) {
          this.store.dispatch(
            new SaveActiveTaskAndNext({
              current: {
                applicationId: this.application$.id,
                workflowId: this.currentWorkflowId$,
                taskId: this.currentTaskId$
              },
              workflowId: this.nextWorkflowId$,
              taskId: this.nextTaskId$
            }));
        } else {
          this.store.dispatch(
            new SetActiveTask({
              workflowId: this.nextWorkflowId$,
              taskId: this.nextTaskId$
            }));
        }

        break;
      case 'signAndSubmit':
        console.log(action);
    }
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
          options: CANCELLATION_REASONS
        },
      },
      {
        key: 'comments',
        type: 'textarea',
        hideExpression: (model) => this.model.reason !== 'other',
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
    this.store.dispatch(new CancelApplicationRequest(this.model));
  }
}
