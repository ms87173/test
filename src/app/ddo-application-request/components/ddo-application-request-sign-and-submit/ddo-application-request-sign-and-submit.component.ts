import { Component, OnInit, ChangeDetectorRef, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { fromRootReducers, fromRootActions, fromRootSelectors } from '../../../store';
import {
  SignAndSubmit, FormlyFieldConfigArrayCollection, TaskRequest, SignAndSubmitDeltaResponse,
  SignAndSubmitDeltaError,
} from '../../../core';
import { takeWhile } from 'rxjs/operators';
import { Task } from '../../../core/models';
import {
  GetSignAndSubmitTask,
  GetSignAndSubmitTaskFormlyConfig,
  SetAgreeAndSubmitMode,
  SetTncReview
} from '../../../store/actions/sign-and-submit.actions';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { NgxMdService } from 'ngx-md';
@Component({
  selector: 'ddo-application-request-sign-and-submit',
  templateUrl: './ddo-application-request-sign-and-submit.component.html',
  styleUrls: ['./ddo-application-request-sign-and-submit.component.scss']
})
export class DdoApplicationRequestSignAndSubmitComponent implements OnInit, OnDestroy, OnChanges {

  isComponentActive = true;
  signAndSubmitTask: SignAndSubmit = null;
  applicationId: string = null;
  currentTaskId: string = null;
  currentTask: Task = null;
  currentWorkflowId: string = null;
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  model: any = {};
  fields: FormlyFieldConfig[] = [];
  taskRequest: TaskRequest;
  signAndSubmitQuestionId: any;
  requestId: any;
  currentTaskType: any;

  constructor(private cd: ChangeDetectorRef,
    private store: Store<fromRootReducers.AppState>,
    private _markdown: NgxMdService,
  ) {

    this.form.valueChanges.subscribe((data) => {
      const disableArr = [];
      if (this.fields) {
        const questionIds = this.fields.map((field) => field.key);
        questionIds.forEach((id) => {
          const disableVal =
            this.form.get(id) && this.form.get(id)['value'] === null ? false : this.form.get(id) && this.form.get(id)['value'];
          if (typeof disableVal === 'boolean') {
            disableArr.push(disableVal);
          }
        });
      }
      const boolVal = disableArr.some(v => !v);
      this.disableValuefn(boolVal);
    });

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
        this.currentTaskId = activeTask.task.id;
        this.currentWorkflowId = activeTask.workflowId;
        this.currentTaskType = activeTask.task.type;


      }
      );



    this.store.pipe(select(fromRootSelectors.applicationRequestSelectors.getSignAndSubmitQuestionId),
      takeWhile(() => this.isComponentActive)
    ).
      subscribe((signAndSubmitQuestionId: string) => {
        if (signAndSubmitQuestionId) {
          this.signAndSubmitQuestionId = signAndSubmitQuestionId;

        }
      });

    this.store.pipe(select(fromRootSelectors.applicationRequestSelectors.getSignAndSubmitTask),
      takeWhile(() => this.isComponentActive)
    ).
      subscribe((signAndSubmitTask: SignAndSubmit) => {
        if (signAndSubmitTask) {
          this.signAndSubmitTask = signAndSubmitTask;
          this.store.dispatch(new GetSignAndSubmitTaskFormlyConfig({
            task: this.signAndSubmitTask,
            signAndSubmitId: this.signAndSubmitQuestionId,
            requestId: this.requestId,
            workflowId: this.currentWorkflowId,
            taskId: this.currentTaskId
          }


          ));
        }
      });

    this.store.pipe(select(fromRootSelectors.applicationRequestSelectors.getSignAndSubmitTaskFormlyConfig),
      takeWhile(() => this.isComponentActive)
    ).
      subscribe((signAndSubmitTaskFormlyConfig: FormlyFieldConfigArrayCollection[]) => {
        if (signAndSubmitTaskFormlyConfig && signAndSubmitTaskFormlyConfig.length > 0) {
          this.fields = signAndSubmitTaskFormlyConfig[0].formlyFieldConfigs;

        }
      });

    this.store
      .pipe(select(fromRootSelectors.applicationRequestSelectors.getApplicaitonId),
        takeWhile(() => this.isComponentActive))
      .subscribe((applicationId: string) => {
        if (applicationId) {
          this.applicationId = applicationId;
          this.signAndSubmitTaskAction();
        }
      });

    this.store.pipe(
      select(fromRootSelectors.applicationRequestSelectors.getApplicationActiveTask),
      takeWhile(() => this.isComponentActive))
      .subscribe((activeTaskData: any) => {
        this.currentTaskId = activeTaskData.task.id;
        this.currentWorkflowId = activeTaskData.workflowId;
        this.signAndSubmitTaskAction();
      });

  }
  disableValuefn(disableValData) {
    if (disableValData) {
      this.store.dispatch(new SetTncReview(null));
    } else {
      this.store.dispatch(new SetTncReview(disableValData));
    }
    // console.log(disableValData, ':::4000',typeof disableValData);
    this.store.dispatch(new SetAgreeAndSubmitMode(
      disableValData
    ));
    // console.log("form value changes", this.store);
  }
  ngOnInit() {
    this._markdown.renderer.link = (href: string, title: string, text: string) =>
      `<a target="_blank" href="${href}"> ${text} </a>`;
  }

  signAndSubmitTaskAction() {
    if (this.applicationId && this.currentWorkflowId && this.currentTaskId) {
      this.store.dispatch(new GetSignAndSubmitTask({
        requestId: this.applicationId,
        workflowId: this.currentWorkflowId,
        taskId: this.currentTaskId
      }));
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.form.valueChanges.subscribe((data) => {
      // console.log("form changes");
      // console.log(data);
    });
  }
  ngOnDestroy(): void {
    this.isComponentActive = false;
  }


}
