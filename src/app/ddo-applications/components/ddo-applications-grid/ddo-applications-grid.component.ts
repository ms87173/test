import {
  Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation
} from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap';
import { ACTION_TYPES, APPLICATIONS_STATUS } from '../../../core/constants/applications.constants';

@Component({
  selector: 'app-ddo-applications-grid',
  templateUrl: './ddo-applications-grid.component.html',
  styleUrls: ['./ddo-applications-grid.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: BsDropdownConfig,
    useValue: { autoClose: true, placement: 'right' }
  }]
})

export class DdoApplicationsGridComponent implements OnInit {
  @Input() config: any;
  @Output() actions: any = new EventEmitter();
  actionTypes: any;
  sortByKey: any;
  status: any;
  constructor() {
    this.actionTypes = ACTION_TYPES;
    this.status = APPLICATIONS_STATUS;
  }

  ngOnInit() {
  }
  getRowDetails(data) {
    return Object.values(data)[0];
  }
  ongridItemClick(actionType: string, params: any) {
    this.sortByKey = params.key;
    this.actions.emit({ actionType, params });
  }
}
