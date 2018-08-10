import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../core';
import { ApplicationGridModel } from '../core/models/application-grid.model';
import { fromRootReducers, fromRootSelectors } from '../store';
import { Store } from '@ngrx/store';
import {
  GetApplications, SetActiveApplication, SortApplications
} from '../store/actions/applications.actions';


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
  constructor(
    public apiService: ApiService,
    private store: Store<fromRootReducers.AppState>
  ) { }

  ngOnInit() {
    const headings = [
      {
        key: 'description',
        value: 'DESCRIPTION',
        showSortOption: false
      },
      {
        key: 'type',
        value: 'TYPE',
        showSortOption: false
      },
      {
        key: 'lastUpdated',
        value: 'LAST UPDATE',
        showSortOption: true
      },
      {
        key: 'lastUpdatedBy',
        value: 'LAST UPDATED BY',
        showSortOption: true
      },
      {
        key: 'status',
        value: 'STATUS',
        showSortOption: true
      }
    ];
    this.gridConfig = {
      headings,
      data: []
    };
    this.store.dispatch(new GetApplications());
    this.store.select(fromRootSelectors.applicationsSelectors.getApplicaitons)
      .subscribe((applications: any) => {
        this.gridConfig.data =
          applications.map((application) => new ApplicationGridModel(application));
      });
  }
  gridActions(payload) {
    switch (payload.actionType) {
      case 'rowClicked': this.store.dispatch(new SetActiveApplication(payload.id));
        break;
      case 'sort': this.store.dispatch(new SortApplications(payload.params));
        break;
      case 'kebabIconClicked': console.log('you have open the kebab icon.')
    }
    console.log(payload)
  }

}
