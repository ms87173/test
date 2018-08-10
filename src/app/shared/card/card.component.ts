import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class CardComponent implements OnInit {

  constructor() { }
  @Input() config: any;
  ngOnInit() {
  }

}
