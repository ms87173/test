import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReviewInformationTask } from '../../../core';

@Component({
  selector: 'ddo-application-request-review-information-task',
  templateUrl: './ddo-application-request-review-information-task.component.html',
  styleUrls: ['./ddo-application-request-review-information-task.component.scss']
})
export class DdoApplicationRequestReviewInformationTaskComponent implements OnInit {

  @Input() task: ReviewInformationTask;
  @Output() editClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }

  editBtnClicked(taskId: string) {
    this.editClicked.emit(taskId);
  }

}
