import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})

export class BadgeComponent implements OnInit{
  @Input() config: any;
  constructor() { }

  ngOnInit() {

  }

}
