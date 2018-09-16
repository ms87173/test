import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApplicationGridModel } from '../core/models/application-grid.model';
import { fromApplicationsSelectors } from './state';
import { Store } from '@ngrx/store';
import {
  GetApplications,
  SortApplications,
  FilterApplications
} from './state/actions/ddo-applications.actions';
import {
  APPLICATION_GRID_HEADING,
  APPLICATION_DROPDOWN_OPTIONS,
  ACTION_TYPES, FILTER_CRITERIA
} from '../core/constants/applications.constants';
import { ContactDetailsModel } from '../core/models/contact-detail.model';
import * as _ from 'lodash';
import { RouterGo } from '../store/actions/router.actions';
import { fromRootSelectors, fromRootReducers } from '../store';
import { FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { takeUntil, startWith, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

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
  onDestroy$ = new Subject<void>();
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: Array<any>;
  isFilteredData: boolean;
  filteredData: any;
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
    this.store.select(fromApplicationsSelectors.ddoApplicationsSelectors.getApplications)
      .subscribe((applications: any) => {
        this.gridConfig.data =
          applications.map((application) => new ApplicationGridModel(application));
        this.store.dispatch(
          new SortApplications({
            data: applications,
            params: { key: 'lastUpdate', sortOrder: 'desc' }
          })
        );
        this.applicationsData = applications;
      }
      );
    this.store.select(fromApplicationsSelectors.ddoApplicationsSelectors.sortApplications)
      .subscribe((applications: any) => {
        this.gridConfig.data =
          applications && applications.map((application) => new ApplicationGridModel(application));
      });
    this.store.select(fromApplicationsSelectors.ddoApplicationsSelectors.filterApplications)
      .subscribe((applications: any) => {
        this.gridConfig.data =
          applications && applications.map((application) => new ApplicationGridModel(application));
        this.filteredData = applications;
      });
  }

  ngOnInit() {
    this.isFilteredData = false;
    this.fields = [
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            key: 'modified',
            type: 'custom-dropdown',
            className: 'col-sm-12 col-md-3 col-lg-2',
            defaultValue: 'all',
            templateOptions: {
              label: 'Modified Date',
              hideRequiredMarker: true,
              required: true,
              options: FILTER_CRITERIA.modified
            },
            lifecycle: {
              onInit: (form, field) => {
                form.get('modified').valueChanges.
                  distinctUntilChanged((a, b) => a === b).pipe(
                    takeUntil(this.onDestroy$),
                    startWith(form.get('modified').value),
                    tap(modified => {
                      if (modified && modified !== 'customDate') {
                        const statusFilterValue = form.get('status').value;
                        this.filterApplication(
                          {
                            statusFilter: { key: 'status', value: statusFilterValue },
                            modifiedFilter: { key: 'modified', value: modified }
                          });
                      }
                    }),
                  ).subscribe();
              },
            },
          },
          {
            key: 'status',
            type: 'custom-dropdown',
            className: 'col-sm-12 col-md-3 col-lg-2',
            defaultValue: 'all',
            templateOptions: {
              label: 'Status',
              required: true,
              hideRequiredMarker: true,
              options: FILTER_CRITERIA.status
            },
            lifecycle: {
              onInit: (form, field) => {
                form.get('status').valueChanges
                  .distinctUntilChanged((a, b) => a === b)
                  .pipe(
                    takeUntil(this.onDestroy$),
                    startWith(form.get('status').value),
                    tap(filterBy => {
                      if (filterBy) {
                        const selectedDate = form.get('customDate').value;
                        const modifiedFilterValue = form.get('modified').value;
                        this.filterApplication(
                          {
                            statusFilter: {
                              key: 'status',
                              value: filterBy
                            },
                            modifiedFilter: {
                              key: 'modified',
                              value: modifiedFilterValue,
                              filterDate: moment(selectedDate).format('MM DD YYYY')
                            }
                          });
                      }
                    }),
                  ).subscribe();
              },
            },
          },
          {
            key: 'customDate',
            type: 'custom-datepicker',
            className: 'col-sm-12 col-md-3 col-lg-2',
            templateOptions: {
              label: 'Date of Birth',
              datepickerOptions: {
                show: false,
                placement: 'left',
                initialState: moment().format('DD/MM/YYYY')
              }
            },
            lifecycle: {
              onInit: (form, field) => {
                form.get('modified').valueChanges.
                  distinctUntilChanged((a, b) => a === b).pipe(
                    takeUntil(this.onDestroy$),
                    startWith(form.get('modified').value),
                    tap(modified => {
                      field.formControl.setValue('');
                      if (modified === 'customDate') {
                        field.templateOptions.datepickerOptions.show = true;
                      } else {
                        field.templateOptions.datepickerOptions.show = false;
                      }
                    }),
                  ).subscribe();
                form.get('customDate').valueChanges.
                  distinctUntilChanged((a, b) => a === b).
                  pipe(
                    takeUntil(this.onDestroy$),
                    startWith(form.get('customDate').value),
                    tap(selectedDate => {
                      if (selectedDate) {
                        const statusFilterValue = form.get('status').value;
                        field.templateOptions.datepickerOptions.initialState = selectedDate;
                        form.get('customDate').value = selectedDate;
                        this.filterApplication(
                          {
                            statusFilter: {
                              key: 'status',
                              value: statusFilterValue
                            },
                            modifiedFilter: {
                              key: 'modified',
                              value: 'customDate',
                              filterDate: moment(selectedDate).format('MM DD YYYY')
                            }
                          });
                      }
                    })
                  ).subscribe();
              },
            },
          }
        ]
      }
    ];
    this.store.dispatch(new GetApplications());
  }

  gridActions(payload) {
    switch (payload.actionType) {
      case ACTION_TYPES.rowClicked:
        this.store.dispatch(
          new RouterGo({
            path: ['ddo', 'applications', payload.params, 'dashboard'],
          })
        );
        break;
      case ACTION_TYPES.sort:
        if (this.isFilteredData) {
          this.store.dispatch(new SortApplications({ data: this.filteredData, params: payload.params }));
        }
        this.store.dispatch(new SortApplications({ data: this.applicationsData, params: payload.params }));
        break;
      case ACTION_TYPES.continueNow:
        this.store.dispatch(
          new RouterGo({
            path: ['ddo', 'applications', payload.params, 'tasks'],
          })
        );
    }
  }

  filterApplication(filterCriteria) {
    this.isFilteredData = true;
    this.store.dispatch(new FilterApplications({ data: this.applicationsData, params: filterCriteria }));
  }
}
