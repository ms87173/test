import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'label-value-group',
  templateUrl: './label-value-group.component.html',
  styleUrls: ['./label-value-group.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LabelValueGroupComponent implements OnInit {

  constructor() { }
  @Input() config: any;
  ngOnInit() {
  }

}
