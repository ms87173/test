import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopNavComponent implements OnInit {
  constructor() { }
  @Input() config: any;
  @Input() sideNavOpen: any;
  ngOnInit() {
  }
  toggleSideNav() {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
