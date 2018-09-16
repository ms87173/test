import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ReviewInformationWorkflow } from '../../../core';

@Component({
  selector: 'ddo-application-request-review-information-workflow',
  templateUrl: './ddo-application-request-review-information-workflow.component.html',
  styleUrls: ['./ddo-application-request-review-information-workflow.component.scss']
})
export class DdoApplicationRequestReviewInformationWorkflowComponent implements OnInit {

  @Input() workflow: ReviewInformationWorkflow;
  @Output() editClicked = new EventEmitter();

  constructor() { }

  editBtnClicked(data) {
    this.editClicked.emit({
      taskId: data.taskId,
      workflowId: this.workflow.workflowId,
      sectionId: data.sectionId
    });
  }
  ngOnInit() {
  }

}
