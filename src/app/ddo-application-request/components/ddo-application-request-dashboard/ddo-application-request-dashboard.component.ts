import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromRootReducers, fromRootSelectors } from '../../../store';
import { ContactDetailsModel } from '../../../core/models/contact-detail.model';

@Component({
  selector: 'ddo-application-request-dashboard',
  templateUrl: './ddo-application-request-dashboard.component.html',
  styleUrls: ['./ddo-application-request-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DdoApplicationRequestDashboardComponent {
  application: any;
  contactPersonDetails$: any;
  productsDescription: string;
  title: string;
  constructor(private store: Store<fromRootReducers.AppState>) {
    this.store.select(fromRootSelectors.applicationRequestSelectors.getApplicaiton)
      .subscribe((application: any) => {
        this.application = application;
        this.productsDescription = this.application.products.join(', ');
      });
    this.store.select(fromRootSelectors.userSelectors.getUserContactPerson)
      .subscribe((contactDetail: any) => {
        this.contactPersonDetails$ = new ContactDetailsModel(contactDetail);
      });
  }
  cancelApplication() {
    console.log('cancel clicked');
  }
  editClick() {
    console.log('edit clicked');
  }
}
