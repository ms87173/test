import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApplicationGridModel } from '../core/models/application-grid.model';
import { fromRootReducers, fromRootSelectors } from '../store';
import { Store } from '@ngrx/store';
import { GetApplications } from '../store/actions/applications.actions';
import { APPLICATION_GRID_HEADING, APPLICATION_DROPDOWN_OPTIONS, ACTION_TYPES } from '../core/constants/applications.constants';
import { ContactDetailsModel } from '../core/models/contact-detail.model';
import * as _ from 'lodash';
import { RouteChange, RouterGo } from '../store/actions/router.actions';

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
    private store: Store<fromRootReducers.AppState>
  ) {
    const headings = APPLICATION_GRID_HEADING;
    const dropDownOptions = APPLICATION_DROPDOWN_OPTIONS;
    this.gridConfig = {
      headings,
      data: [],
      dropDownOptions
    };
    this.store.select(fromRootSelectors.userSelectors.getUserContactPerson).
      subscribe((contactDetail: any) => {
        this.contactPersonDetails = new ContactDetailsModel(contactDetail);
      });
    this.store.select(fromRootSelectors.applicationsSelectors.getApplicaitons)
      .subscribe((applications: any) => {
        this.gridConfig.data =
          applications.map((application) => new ApplicationGridModel(application));
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
            path: ['applications', payload.params ],
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
    let { key } = params
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
