import { Component, OnInit } from '@angular/core';
import * as fromApp from './store/reducers';
import * as userActions from './store/actions/user-info.actions';
import * as applicationRequestActions from './store/actions/application-request.actions';
import { Store, select } from '@ngrx/store';
import * as fromUserSelectors from './store/selectors/user-info.selectors';
import { AuthenticationService } from './core/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(
    private store: Store<fromApp.AppState>,
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
    // this.auth.setToken();
    this.store.dispatch(new userActions.GetUser());
    // this.store.dispatch(new applicationRequestActions.GetApplicationRequest());
    this.store.dispatch(new userActions.GetUserContactPerson());
    this.store.pipe(select(fromUserSelectors.getUserState))
      .subscribe((user) => {
        // console.log(user);
      });
  }
}
