import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReviewInformationTask } from '../../../core';
import { CustomComponentsEnum } from '../../../custom-formly-fields/enums/custom-components.enum';

@Component({
  selector: 'ddo-application-request-review-information-task',
  templateUrl: './ddo-application-request-review-information-task.component.html',
  styleUrls: ['./ddo-application-request-review-information-task.component.scss']
})
export class DdoApplicationRequestReviewInformationTaskComponent implements OnInit {

  @Input() task: ReviewInformationTask;
  @Output() editClicked = new EventEmitter();
  CustomComponentsEnum = CustomComponentsEnum;

  constructor() { }

  ngOnInit() {

  }

  editBtnClicked(taskId: string, sectionTitle: string) {
    this.editClicked.emit({ taskId: taskId, sectionTitle: sectionTitle });
  }

}
