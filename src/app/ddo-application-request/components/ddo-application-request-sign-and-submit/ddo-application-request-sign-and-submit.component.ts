import { Component, OnInit, ChangeDetectorRef, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { fromRootReducers, fromRootSelectors } from '../../../store';
import { SignAndSubmit, FormlyFieldConfigArrayCollection } from '../../../core';
import { takeWhile } from 'rxjs/operators';
import { GetSignAndSubmitTask, GetSignAndSubmitTaskFormlyConfig } from '../../../store/actions/sign-and-submit.actions';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'ddo-application-request-sign-and-submit',
  templateUrl: './ddo-application-request-sign-and-submit.component.html',
  styleUrls: ['./ddo-application-request-sign-and-submit.component.scss']
})
export class DdoApplicationRequestSignAndSubmitComponent implements OnInit, OnDestroy, OnChanges {

  isComponentActive = true;
  signAndSubmitTask: SignAndSubmit = null
  applicationId: string = null;
  currentTaskId: string = null;
  currentWorkflowId: string = null;
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  model: any = {};
  fields: FormlyFieldConfig[] = [];

  constructor(private cd: ChangeDetectorRef,
    private store: Store<fromRootReducers.AppState>
  ) {

    this.store.pipe(select(fromRootSelectors.applicationRequestSelectors.getSignAndSubmitTask),
      takeWhile(() => this.isComponentActive)
    ).
      subscribe((signAndSubmitTask: SignAndSubmit) => {
        if (signAndSubmitTask) {
          this.signAndSubmitTask = signAndSubmitTask;
          this.store.dispatch(new GetSignAndSubmitTaskFormlyConfig(
            this.signAndSubmitTask
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

  ngOnInit() {
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
      console.log("form changes");
      console.log(data);
    });
  }
  ngOnDestroy(): void {
    this.isComponentActive = false;
  }


}
