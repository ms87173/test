import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactDetailComponent implements OnInit {

  constructor() { }
  @Input() config: any;
  ngOnInit() {
  }

}
