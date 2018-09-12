import { Component, OnInit, Input } from '@angular/core';
import { ReviewInformationWorkflow } from '../../../core';

@Component({
  selector: 'ddo-application-request-review-information-workflow',
  templateUrl: './ddo-application-request-review-information-workflow.component.html',
  styleUrls: ['./ddo-application-request-review-information-workflow.component.scss']
})
export class DdoApplicationRequestReviewInformationWorkflowComponent implements OnInit {

  @Input() workflow:ReviewInformationWorkflow;
  constructor() { }

  ngOnInit() {
  }

}
