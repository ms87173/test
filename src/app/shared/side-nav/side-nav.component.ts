import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { TASK_STATUSES } from '../../core/constants/application-request.constants';
import { OrderByPipe } from '../../core/pipes/orderBy.pipe';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SideNavComponent implements OnInit {
  oneAtATime = true;
  menuItemConfig: any;
  @Input() config: any;
  @Input() selectedParentId: any;
  @Input() selectedChildId: any;
  @Input() selectedWorkflowGroupId: any;
  @Output() actions: any = new EventEmitter();
  workFlowId: any;
  taskId: any;
  type: any;
  selectedId: any;
  status: any;
  constructor() {
    console.log(this.config);
  }
  ngOnInit() {
    this.status = TASK_STATUSES;
  }
  setSelectedId(workFlowGroupId, parentId, childId, type) {
    console.log(this.config);
    this.selectedWorkflowGroupId = workFlowGroupId;
    this.selectedParentId = parentId;
    this.selectedChildId = childId;
    this.actions.emit({ parentId, childId, type });
  }
}
