import { Component, OnInit, ViewEncapsulation, OnDestroy, ChangeDetectorRef, } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FormlyConfig } from '@ngx-formly/core';
import { Store, select } from '@ngrx/store';
import { fromRootReducers, fromRootActions, fromRootSelectors } from '../../../store';
import { QuestionaireDeltaResponse, QuestionaireDeltaError, FormlyFieldConfigArrayCollection, TaskRequest } from '../../../core/models';
import { takeWhile } from 'rxjs/operators';
import { Task } from '../../../core/models';
import { TASK_TYPES } from '../../../core/constants/application-request.constants';
import { questionnaireActions } from '../../../store/actions';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ddo-application-request-tasks',
  templateUrl: './ddo-application-request-tasks.component.html',
  styleUrls: ['./ddo-application-request-tasks.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DdoApplicationRequestTasksComponent implements OnInit, OnDestroy {
  forms: FormArray = null;
  options: FormlyFormOptions[] = [];
  model: any = {};
  currentTask: Task = null;
  currentQuestionId: string;
  isComponentActive = true;
  requestId: string = null;
  currentTaskid: string = null;
  currentWorkflowId: string = null;
  currentTaskType: string = null;
  formlyFieldConfigArrayCollections: FormlyFieldConfigArrayCollection[] = null;
  taskRequest: TaskRequest;
  isIntialRender = true;

  constructor(
    private cd: ChangeDetectorRef,
    private store: Store<fromRootReducers.AppState>
  ) {
    this.store.pipe(select(fromRootSelectors.applicationRequestSelectors.getApplicaiton),
      takeWhile(() => this.isComponentActive))
      .subscribe((application) => {
        if (application && application.id) {
          this.requestId = application.id;
        }
      });


    this.store.pipe(select(fromRootSelectors.applicationRequestSelectors.getApplicationActiveTask),
      takeWhile(() => this.isComponentActive))
      .subscribe((activeTask) => {
        this.taskRequest = new TaskRequest();
        this.taskRequest.workflowId = activeTask.workflowId;
        this.taskRequest.taskId = activeTask.task.id;
        this.taskRequest.requestId = this.requestId;
        this.taskRequest.taskType = activeTask.task.type;
        this.currentTaskid = activeTask.task.id;
        this.currentWorkflowId = activeTask.workflowId;
        this.currentTaskType = activeTask.task.type;
        if (this.taskRequest.workflowId &&
          this.taskRequest.taskId &&
          this.taskRequest.requestId &&
          this.taskRequest.taskType === TASK_TYPES.QUESTION
        ) {
          this.store.dispatch(new fromRootActions.questionnaireActions.GetCurrentTask(this.taskRequest));
        }

      }
      );

    this.store.pipe(select(fromRootSelectors.questionnaireSelectors.getCurrentTask),
      takeWhile(() => this.isComponentActive)
    ).subscribe(
      (currTask) => {
        if (currTask) {
          this.currentTask = currTask;
          this.store.dispatch(new fromRootActions
            .questionnaireActions
            .GetCurrentQuestionnaireFormlyConfig({
              task: this.currentTask,
              currentQuestionId: this.currentQuestionId,
              requestId: this.requestId,
              workflowId: this.taskRequest.workflowId,
              taskId: this.taskRequest.taskId
            }));
          this.cd.detectChanges();

        }
      }
    );

    this.store.pipe(select(fromRootSelectors.questionnaireSelectors.getCurrentQuestionnaireConfig),
      takeWhile(() => this.isComponentActive))
      .subscribe((formlyFieldConfigArrayCollections) => {
        if (formlyFieldConfigArrayCollections) {
          this.formlyFieldConfigArrayCollections = formlyFieldConfigArrayCollections;
          this.forms = new FormArray(this.formlyFieldConfigArrayCollections.map(() => new FormGroup({})));
          this.options = this.formlyFieldConfigArrayCollections.map(() => <FormlyFormOptions>{});
          this.cd.detectChanges();
        }
      });

    this.store.pipe(select(fromRootSelectors.questionnaireSelectors.getCurrentQuestionId),
      takeWhile(() => this.isComponentActive))
      .subscribe((currentQuestionId) => {
        if (currentQuestionId) {
          this.currentQuestionId = currentQuestionId;
        }
      });
  }
  updateOpenSections(data) {
    if (data.actionName === questionnaireActions.ActionTypes.PUSH_SECTION_IN_OPEN_SECTIONS) {
      this.store.dispatch(new fromRootActions
        .questionnaireActions.PushSectionInOpenSections(data.sectionId));
    } else {
      this.store.dispatch(new fromRootActions
        .questionnaireActions.PopSectionInOpenSections(data.sectionId));
    }
  }

  saveChangesBtnClicked(sectionId: string) {
    if (this.requestId &&
      this.currentWorkflowId &&
      this.currentTaskid &&
      this.currentTaskType) {

      this.store.dispatch(new fromRootActions
        .questionnaireActions.SaveChangesBySectionInTask(
          {
            requestId: this.requestId,
            taskId: this.currentTaskid,
            workflowId: this.currentWorkflowId,
            taskType: this.currentTaskType
          }
        ));
    }
  }

  discardChangesBtnClicked(sectionId: string) {
    if (this.requestId &&
      this.currentWorkflowId &&
      this.currentTaskid &&
      this.currentTaskType) {

      this.store.dispatch(new fromRootActions
        .questionnaireActions.DiscardChangesBySectionInTask(
          {
            requestId: this.requestId,
            taskId: this.currentTaskid,
            workflowId: this.currentWorkflowId,
            taskType: this.currentTaskType
          }
        ));
    }

  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.isComponentActive = false;
    this.store.dispatch(new fromRootActions.questionnaireActions.ResetQuestionnaireState());
  }
}


