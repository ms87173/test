import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../core';
import { ApplicationGridModel } from '../../core/models/application-grid.model';
import { fromRootReducers, fromRootSelectors } from '../../store';
import { Store } from '@ngrx/store';
// import { GetApplications } from '../../store/actions/applications.actions';

@Component({
  selector: 'grid-consumer',
  templateUrl: './grid-consumer.component.html',
  styleUrls: ['./grid-consumer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridConsumerComponent implements OnInit {
  gridData: any[];
  data: any;

  constructor(public apiService: ApiService, private store: Store<fromRootReducers.AppState>) { }

  ngOnInit() {
    // this.store.dispatch(new GetApplications());
    // this.store.select(fromRootSelectors.applicationsSelectors.getApplicaitons)
    //   .subscribe((applications: any) => {
    //     this.gridData = [];
    //     this.data = applications.map((details) => new ApplicationGridModel(details));
    //     for (let i = 0; i < this.data.length; i++) {
    //       let x = Object.entries(this.data[i]).map((e) => {
    //         const obj = {};
    //         obj[`${e[0]}`] = e[1];
    //         return obj;
    //       });
    //       this.gridData.push(x);
    //     }
    //   });
  }
}
