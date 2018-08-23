import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromRootReducers, fromRootSelectors } from '../../../store';
import { GetApplicationRequestWorkflows } from '../../../store/actions/application-request.actions';

@Component({
  selector: 'ddo-application-request',
  templateUrl: './ddo-application-request.component.html',
  styleUrls: ['./ddo-application-request.component.scss']
})
export class DdoApplicationRequestComponent implements OnInit {
  application: any;
  workflows: any;

  constructor(
    private store: Store<fromRootReducers.AppState>
  ) { }

  ngOnInit() {
    this.store.select(fromRootSelectors.applicationRequestSelectors.getApplicaitonRequest).
      subscribe((application: any) => {
        this.application = application;
      });
    this.store.select(fromRootSelectors.applicationRequestSelectors.getApplicationRequestWorkflows)
      .subscribe((workflows: any) => {
        this.workflows = workflows;
      });
  }

}
