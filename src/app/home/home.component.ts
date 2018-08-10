import { Component, OnInit } from '@angular/core';
import { TOP_NAVIGATION } from '../core/constants/navigation.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'app';
  navConfig: any;
  applicationDetails: any;

  constructor() { }

  ngOnInit() {
    this.navConfig = {
      'topNavConfig': TOP_NAVIGATION
    };
    this.applicationDetails = {
      'heading': 'Application for 2 Joint Accouts',
      'description': 'Title of account: John, Jane and Susan joint account'
    };
  }

}
