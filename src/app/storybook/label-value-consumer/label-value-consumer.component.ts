import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
@Component({
  selector: 'label-value-consumer',
  templateUrl: './label-value-consumer.component.html',
  styleUrls: ['./label-value-consumer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: BsDropdownConfig, useValue: { autoClose: false } }]
})
export class LabelValueConsumerComponent implements OnInit {
  labelValueConfig: { label: string; value: string; labelClass: string; };
  labelValueConfigWithBadge: any;
  labelValueConfigWithIcon: any;
  labelValueConfigForFormValues: { label: string; value: string; labelClass: string; labelContainerClass: string; };
  labelValueWithIcon: any;
  constructor() { }

  ngOnInit() {
    this.labelValueConfig = {
      label: 'Account Details',
      value: 'Please fill required information for account details',
      labelClass: 'bold'
    };
    this.labelValueConfigWithBadge = {
      label: 'Account Details',
      value: 'Please fill required information for account details',
      labelClass: 'bold',
      labelContainerClass: 'label-with-badge',
      badgeTitle: 'New',
      badgeClass: 'badge-dark'
    };
    this.labelValueConfigWithIcon = {
      label: 'Action Required',
      iconClass: 'fa-exclamation-circle warning',
      labelClass: 'bold'
    };
    this.labelValueConfigForFormValues = {
      label: 'Account Details',
      value: 'Please fill required information for account details',
      labelClass: 'bold',
      labelContainerClass: 'label-with-badge',
    };
    this.labelValueWithIcon = {
      label: 'Action Required',
      iconClass: 'fa-check icon-align-middle',
      labelClass: 'bold pl-2',
      labelContainerClass: 'label-with-badge',
      value: 'Please fill required information',
      valueClass: 'pl-4'
    };
  }
}
