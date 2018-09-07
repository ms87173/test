import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApplicationGridModel } from '../core/models/application-grid.model';
import { fromApplicationsSelectors, fromApplicationsReducers } from './state';
import { Store } from '@ngrx/store';
import { GetApplications } from './state/actions/ddo-applications.actions';
import { APPLICATION_GRID_HEADING, APPLICATION_DROPDOWN_OPTIONS, ACTION_TYPES } from '../core/constants/applications.constants';
import { ContactDetailsModel } from '../core/models/contact-detail.model';
import * as _ from 'lodash';
import { RouteChange, RouterGo } from '../store/actions/router.actions';
import { fromRootSelectors, fromRootReducers } from '../store';

@Component({
  selector: 'app-ddo-applications',
  templateUrl: './ddo-applications.component.html',
  styleUrls: ['./ddo-applications.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DdoApplicationsComponent implements OnInit {
  gridData: any[];
  data: any;
  columns: string[];
  gridConfig: any;
  contactPersonDetails: any;
  applicationsData: any;
  constructor(
    private store: Store<fromApplicationsReducers.ddoApplicationsReducers.ApplicationsState>,
    private rootStore: Store<fromRootReducers.AppState>
  ) {
    const headings = APPLICATION_GRID_HEADING;
    const dropDownOptions = APPLICATION_DROPDOWN_OPTIONS;
    this.gridConfig = {
      headings,
      data: [],
      dropDownOptions
    };
    this.rootStore.select(fromRootSelectors.userSelectors.getUserContactPerson).
      subscribe((contactDetail: any) => {
        this.contactPersonDetails = new ContactDetailsModel(contactDetail);
      });
    this.store.select(fromApplicationsSelectors.ddoApplicationsSelectors.getApplications)
      .subscribe((applications: any) => {
        this.sortApplications(applications, { sortOrder: 'desc', key: 'lastUpdate' });
        this.applicationsData = applications;
      });
  }

  ngOnInit() {
    this.store.dispatch(new GetApplications());
  }

  gridActions(payload) {
    switch (payload.actionType) {
      case ACTION_TYPES.rowClicked:
        this.store.dispatch(
          new RouterGo({
            path: ['ddo', 'applications', payload.params],
          }
          )
        );
        break;
      case ACTION_TYPES.sort: this.sortApplications(this.applicationsData, payload.params);
        break;
      case ACTION_TYPES.completeNow:
    }
  }
  sortApplications(data, params) {
    let formatedData;
    let { key } = params;
    if (params.key === 'status') {
      key = 'status.description';
    }
    formatedData = _.orderBy(data, [key], [params.sortOrder]);
    params.sortOrder = params.sortOrder === 'asc' ? 'desc' : 'asc';
    //TODO refactor this completely via actions or this container being store.
    if (formatedData) {
      this.gridConfig.data = formatedData.map((application) =>
        new ApplicationGridModel(application));
    }
  }
}
