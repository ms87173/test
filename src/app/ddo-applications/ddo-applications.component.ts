import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../core';
import { ApplicationGridModel } from '../core/models/application-grid.model';
import { fromRootReducers, fromRootSelectors } from '../store';
import { Store } from '@ngrx/store';
import {
  GetApplications, SetActiveApplication, SortApplications
} from '../store/actions/applications.actions';
import { APPLICATION_GRID_HEADING, APPLICATION_DROPDOWN_OPTIONS, ACTION_TYPES } from '../core/constants/applications.constants';


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
  constructor(
    public apiService: ApiService,
    private store: Store<fromRootReducers.AppState>
  ) { }

  ngOnInit() {
    const headings = APPLICATION_GRID_HEADING;
    const dropDownOptions = APPLICATION_DROPDOWN_OPTIONS;
    this.gridConfig = {
      headings,
      data: [],
      dropDownOptions
    };
    this.store.dispatch(new GetApplications());
    this.store.select(fromRootSelectors.userSelectors.getUserContactPerson).
      subscribe((contactDetail: any) => {
        this.contactPersonDetails = contactDetail;
        console.log(this.contactPersonDetails);
      });
    this.store.select(fromRootSelectors.applicationsSelectors.getApplicaitons)
      .subscribe((applications: any) => {
        this.gridConfig.data =
          applications.map((application) => new ApplicationGridModel(application));
      });
  }
  gridActions(payload) {
    switch (payload.actionType) {
      case ACTION_TYPES.rowClicked: this.store.dispatch(new SetActiveApplication(payload.id));
        break;
      case ACTION_TYPES.sort: this.store.dispatch(new SortApplications(payload.params));
        break;
      case ACTION_TYPES.completeNow: console.log('you have open the kebab icon.');
    }
    console.log(payload);
  }
}
