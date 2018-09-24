import { Component, OnInit } from '@angular/core';
import * as fromApp from './store/reducers';
import * as userActions from './store/actions/user-info.actions';
import { Store, select } from '@ngrx/store';
import * as fromUserSelectors from './store/selectors/user-info.selectors';
import { AuthenticationService } from './core/services/authentication.service';
import { WindowRef } from './core/services/window-ref.service';
import { RouterGo } from './store/actions/router.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(
    private store: Store<fromApp.AppState>,
    private auth: AuthenticationService,
    private winRef: WindowRef,
    // private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.auth.setToken();
    this.store.dispatch(new userActions.GetUser());
    // this.store.dispatch(new applicationRequestActions.GetApplicationRequest());
    this.store.dispatch(new userActions.GetUserContactPerson());
    this.store.pipe(select(fromUserSelectors.getUserState))
      .subscribe((user) => {
      });
    // // TODO: Mohammad to place in view code here.

    // Todo: Code for deep linking
    // console.log("our Citi  location");
    // // const winObj = this.winRef.nativeWindow;
    // // const parentLocationObj = winObj.parent.location.slice(1);
    // let parentLocationHash =
     // "location=DDO&context=relnKey%3D10500000040618%26lrgRelnInd%3DN%26type%3DRelationship&path=tinshu&activeCurrency=AED"
    // // parentLocationObj.hash;
    // console.log("location hash");
    // console.log(parentLocationHash);
    // let queryStrings = new URLSearchParams(parentLocationHash);
    // // queryStrings.

    // // for (let p in queryStrings.getAll()) {
    // //   console.log(p);
    // // }


    // // this.store.dispatch(
    // //   new RouterGo({
    // //     path: ['ddo/applications/1/tasks/questionnaire']
    // //   })
    // // );
  }
}
