import { Component, OnInit, ViewEncapsulation, OnDestroy, ChangeDetectorRef, } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FormlyConfig } from '@ngx-formly/core';
import { Store, select } from '@ngrx/store';
import { fromRootReducers, fromRootActions, fromRootSelectors } from '../../../store';
import { QuestionaireDeltaResponse, QuestionaireDeltaError, FormlyFieldConfigArrayCollection, TaskRequest } from '../../../core/models';
import { takeWhile } from 'rxjs/operators';
import { Task } from '../../../core/models';
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
  currentTask: Task;
  currentFieldChange: QuestionaireDeltaResponse;
  mergedCurrentTaskWithDelta: Task;
  currentQuestionId: string;
  questionnaireFormErrors: QuestionaireDeltaError[];
  isComponentActive = true;
  requestId: string = null;
  formlyFieldConfigArrayCollections: FormlyFieldConfigArrayCollection[] = [];


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
        const taskRequest = new TaskRequest();
        taskRequest.workFlowId = activeTask.workflowId;
        taskRequest.taskId = activeTask.task.id;
        taskRequest.requestId = this.requestId;
        this.store.dispatch(new fromRootActions.questionnaireActions.GetCurrentTask(taskRequest));
      });
    this.store.pipe(select(fromRootSelectors.questionnaireSelectors.getCurrentTask),
      takeWhile(() => this.isComponentActive)
    ).subscribe(
      (currTask) => {
        if (currTask) {
          this.currentTask = currTask;
          this.store.dispatch(new fromRootActions
            .questionnaireActions
            .GetCurrentQuestionnaireFormlyConfig({ task: this.currentTask, currentQuestionId: this.currentQuestionId }));
        }
      }
    );

    this.store.pipe(select(fromRootSelectors.questionnaireSelectors.getCurrentQuestionnaireConfig),
      takeWhile(() => this.isComponentActive)
    ).subscribe((formlyFieldConfigArrayCollections) => {
      if (formlyFieldConfigArrayCollections) {
        this.formlyFieldConfigArrayCollections = formlyFieldConfigArrayCollections;
        this.forms = new FormArray(this.formlyFieldConfigArrayCollections.map(() => new FormGroup({})));
        this.options = this.formlyFieldConfigArrayCollections.map(() => <FormlyFormOptions>{});
        this.cd.detectChanges();
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.isComponentActive = false;
    this.store.dispatch(new fromRootActions.questionnaireActions.ResetQuestionnaireState());

  }
}


