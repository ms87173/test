import {
  Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation
} from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap';

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
  constructor() { }

  ngOnInit() {
  }
  getRowDetails(data) {
    return Object.values(data)[0];
  }
  ongridItemClick(event, actionType: string, params: string) {
    this.actions.emit({ actionType, params });
  }
}
