import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit {
  oneAtATime = true;
  menuItemConfig: any;
  @Input() config: any;
  @Input() selectedParentId: any;
  @Input() selectedChildId: any;
  @Output() actions: any = new EventEmitter();

  workFlowId: any;
  taskId: any;
  type: any;
  selectedId: any;
  constructor() { }
  ngOnInit() {
  }
  setSelectedId(parentId, childId, type) {
    this.selectedParentId = parentId;
    this.selectedChildId = childId;
    this.actions.emit({ parentId, childId, type });
  }
}
