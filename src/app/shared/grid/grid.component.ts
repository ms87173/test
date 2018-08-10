import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: BsDropdownConfig, useValue: { autoClose: false } }]
})
export class GridComponent implements OnInit {
  gridData: any[];

  constructor() { }
  @Input() columns: any;
  @Input() data: any; 
  ngOnInit() { }
  getRowDetails(data) {
    return Object.values(data)[0];
  }
  rowClick(id: any) {
    console.log(id)
  }
}
