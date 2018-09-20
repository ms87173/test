import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromRootReducers, fromRootSelectors } from '../../../store';
import {
  DeterminePendingTaskOfApplication,
  SetActiveTask,
  SaveActiveTaskAndExit,
  SaveActiveTaskAndNext
} from '../../../store/actions/workflows.action';
import WorkFlowsSideNavModel from '../../../core/models/workflow-sidenav.model';
import { APPLICATION_HEADING, TASK_TYPES } from '../../../core/constants/application-request.constants';
import { ContactDetailsModel } from '../../../core/models/contact-detail.model';
import { RouterGo } from '../../../store/actions/router.actions';
import { FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { ResetOpenSections } from '../../../store/actions/questionnaire.actions';
import { AgreeAndSubmitQuestionnaire } from '../../../store/actions/sign-and-submit.actions';

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
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: Array<any>;
  TASK_TYPES = TASK_TYPES;
  tncReview: boolean = true;
  agreeAndSubmitMode: boolean = true;
  saveAndExitInfo = {
    label: '',
    status: ''
  };
  constructor(
    private store: Store<fromRootReducers.AppState>,
  ) {
    this.applicationHeading = new Map(Object.entries(APPLICATION_HEADING));
    this.store.select(fromRootSelectors.applicationRequestSelectors.getTncReview).
      subscribe((tncReview: any) => {
        this.tncReview = tncReview;
      });
    this.store.select(fromRootSelectors.applicationRequestSelectors.getAgreeAndSubmitMode).
      subscribe((agreeAndSubmitMode: any) => {
        // console.log(agreeAndSubmitMode, 'agreeAndSubmitMode60');
        this.agreeAndSubmitMode = agreeAndSubmitMode;
        // //console.log(this.agreeAndSubmitMode, 'agreeAndSubmitMode61')
      });

    this.store.select(fromRootSelectors.applicationRequestSelectors.getApplicaiton).
      subscribe((application: any) => {
        this.application$ = application;
      });

    this.store.select(fromRootSelectors.userSelectors.getUserContactPerson).
      subscribe((contactDetail: any) => {
        this.contactPersonDetails$ = new ContactDetailsModel(contactDetail);
      });

    this.store.select(fromRootSelectors.applicationRequestSelectors.getApplicationActiveTask)
      .subscribe((activeTaskData: any) => {
        this.currentTaskId$ = activeTaskData.task.id;
        this.currentWorkflowId$ = activeTaskData.workflowId;
        this.currentTaskType = activeTaskData.task.type;
        if (this.currentTaskType === TASK_TYPES.QUESTION) {
          this.saveAndExitInfo = {
            label: 'Save and Exit',
            status: 'saveAndExit'
          };
        } else if (
          this.currentTaskType === TASK_TYPES.REVIEW_INFORMATION ||
          this.currentTaskType === TASK_TYPES.SIGN_AND_SUMBIT
        ) {
          this.saveAndExitInfo = {
            label: 'Exit',
            status: 'exit'
          };
        }
        // //console.log(this.store, ':::141');
        if (this.currentTaskId$ && this.currentTaskType && this.application$.id) {
          this.store.dispatch(
            new RouterGo({
              path: ['ddo', 'applications', this.application$.id, 'tasks', this.currentTaskType]
            })
          );
        }
      });
    this.store.select(fromRootSelectors.applicationRequestSelectors.getApplicationWorkflows)
      .subscribe((workflows: any) => {
        this.workflows$ = workflows && workflows.map((workflow) => new WorkFlowsSideNavModel(workflow));
        // TODO: to avoid further dispatching when we re fetch the configuration
        // TODO: Refactor this to avoid taskId in URL.
        if (workflows && workflows.length > 0 && !this.currentTaskId$) {
          this.store.dispatch(new DeterminePendingTaskOfApplication(workflows));
        }
      });

    this.store.select(fromRootSelectors.applicationRequestSelectors.getApplicationNextTask)
      .subscribe((nextTaskData: any) => {
        this.nextTaskId$ = nextTaskData.task.id;
        this.nextWorkflowId$ = nextTaskData.workflowId;
      });

    this.store.select(fromRootSelectors.applicationRequestSelectors.getApplicationPreviousTask)
      .subscribe((previousTaskData: any) => {
        this.previousTaskId$ = previousTaskData.task.id;
        this.previousWorkflowId$ = previousTaskData.workflowId;
      });
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
      case 'agreeAndSubmit':
        if (this.tncReview !== null) {
          this.store.dispatch(
            new AgreeAndSubmitQuestionnaire({
              requestId: this.application$.id,
              taskId: this.currentTaskId$,
              tncReviewRequired: this.tncReview
            })
          );
        }
        break;
      case 'back':
        this.store.dispatch(new ResetOpenSections());
        this.store.dispatch(
          new SetActiveTask({
            workflowId: this.previousWorkflowId$,
            taskId: this.previousTaskId$
          }));
        break;
      case 'saveAndExit':
        this.store.dispatch(
          new SaveActiveTaskAndExit({
            workflowId: this.currentWorkflowId$,
            taskId: this.currentTaskId$,
            requestId: this.application$.id
          }));
        break;
      case 'exit':
        this.store.dispatch(
          new RouterGo({
            path: ['ddo', 'my-applications']
          })
        );
        break;
      case 'next':
        this.store.dispatch(new ResetOpenSections());
        if (this.currentTaskType === TASK_TYPES.QUESTION) {
          this.store.dispatch(
            new SaveActiveTaskAndNext({
              current: {
                requestId: this.application$.id,
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
    }
  }
}
