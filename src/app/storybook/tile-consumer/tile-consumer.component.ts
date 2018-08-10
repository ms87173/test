import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tile-consumer',
  templateUrl: './tile-consumer.component.html',
  styleUrls: ['./tile-consumer.component.scss']
})
export class TileConsumerComponent implements OnInit {
  tileConfig: { heading: string; subHeading: string; };
  tileConfigWithStatusPending: { heading: string; subHeading: string; iconClass: string; };
  tileConfigWithStatus: { heading: string; subHeading: string; iconClass: string; };
  tileConfigWithBadge: { heading: string; subHeading: string; badgeText: string; };

  constructor() { }

  ngOnInit() {
    this.tileConfig = {
      heading: 'John robbins',
      subHeading: 'Primary'
    };
    this.tileConfigWithStatus = {
      heading: 'John robbins',
      subHeading: 'Primary',
      iconClass: 'fa-circle success'
    };
    this.tileConfigWithStatusPending = {
      heading: 'John robbins',
      subHeading: 'Primary',
      iconClass: 'fa-circle-o warning'
    };
    this.tileConfigWithBadge = {
      heading: 'John robbins',
      subHeading: 'Primary',
      badgeText: 'Optional'
    };
  }
}
