import { Component, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { fromRootReducers, fromRootSelectors } from '../../../store';
import { ReviewInformationResponse } from '../../../core/models';
import { takeWhile } from 'rxjs/operators';
import { GetAllTasksForReviewInformationTask } from '../../../store/actions/review-information.actions';
import { SetActiveTask } from '../../../store/actions/workflows.action';
import { PushSectionInOpenSections } from '../../../store/actions/questionnaire.actions';




@Component({
  selector: 'ddo-application-request-review-information',
  templateUrl: './ddo-application-request-review-information.component.html',
  styleUrls: ['./ddo-application-request-review-information.component.scss']
})
export class DdoApplicationRequestReviewInformationComponent implements OnInit, OnChanges, OnDestroy {

  reviewInformationTask: ReviewInformationResponse = null;
  applicationId: string = null;
  currentTaskId: string = null;
  currentWorkflowId: string = null;
  isComponentActive = true;

  constructor(private cd: ChangeDetectorRef,
    private store: Store<fromRootReducers.AppState>
  ) {

    this.store.pipe(select(fromRootSelectors.applicationRequestSelectors.getApplicationReviewInformationTask),
      takeWhile(() => this.isComponentActive)
    ).
      subscribe((reviewInformationTask: ReviewInformationResponse) => {
        if (reviewInformationTask) {
          this.reviewInformationTask = reviewInformationTask;
        }
      });

    this.store
      .pipe(select(fromRootSelectors.applicationRequestSelectors.getApplicaitonId),
        takeWhile(() => this.isComponentActive))
      .subscribe((applicationId: string) => {
        if (applicationId) {
          this.applicationId = applicationId;
          this.dispatchReviewInformationTaskAction();
        }
      });

    this.store.pipe(
      select(fromRootSelectors.applicationRequestSelectors.getApplicationActiveTask),
      takeWhile(() => this.isComponentActive))
      .subscribe((activeTaskData: any) => {
        this.currentTaskId = activeTaskData.task.id;
        this.currentWorkflowId = activeTaskData.workflowId;
        this.dispatchReviewInformationTaskAction();
      });
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  editBtnClicked(data) {
    this.store.dispatch(
      new PushSectionInOpenSections(data.sectionId));
    this.store.dispatch(
      new SetActiveTask({
        workflowId: data.workflowId,
        taskId: data.taskId
      }));


  }

  dispatchReviewInformationTaskAction() {
    if (this.applicationId && this.currentWorkflowId && this.currentTaskId) {
      this.store.dispatch(new GetAllTasksForReviewInformationTask({
        requestId: this.applicationId,
        workflowId: this.currentWorkflowId,
        taskId: this.currentTaskId
      }));
    }
  }
  ngOnDestroy(): void {
    this.isComponentActive = false;
  }

}
