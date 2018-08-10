import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TileComponent implements OnInit {
  constructor() { }
  @Input() config: any;
  ngOnInit() {
  }
  getIconColor() {
    if (this.config && this.config.status === 'completed') {
      return 'green';
    }
  }
}
