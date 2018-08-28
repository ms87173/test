import { Component, OnInit } from '@angular/core';
import * as fromApp from './store/reducers';
import * as userActions from './store/actions/user-info.actions';
import { Store, select } from '@ngrx/store';
import * as fromUserSelectors from './store/selectors/user-info.selectors';
import { AuthenticationService } from './core/services/authentication.service';
import { WindowRef } from './core/services/window-ref.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(
    private store: Store<fromApp.AppState>,
    private auth: AuthenticationService,
    private winRef: WindowRef
  ) { }

  ngOnInit() {
    this.auth.setToken();
    this.store.dispatch(new userActions.GetUser());
    // this.store.dispatch(new applicationRequestActions.GetApplicationRequest());
    this.store.dispatch(new userActions.GetUserContactPerson());
    this.store.pipe(select(fromUserSelectors.getUserState))
      .subscribe((user) => {
      });
      //TODO: Mohammad to place in view code here.
  }
}
