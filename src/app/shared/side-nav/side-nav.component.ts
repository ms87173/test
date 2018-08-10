import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

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
  @Input() sideNavOpen: boolean;
  workFlowId: any;
  taskId: any;
  type: any;
  constructor() { }

  ngOnInit() {
  }
  setSelectedId(childId, type) {
    this.taskId = childId;
    this.type = type;
  }
}
