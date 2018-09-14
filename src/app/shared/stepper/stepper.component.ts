import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  steps: Array<any>;

  constructor() { }

  ngOnInit() {
    this.steps = [
      {
        type: 'PRODUCT_INFO',
        name: 'Update Product Info',
        iconClass: 'fa-sliders',
        showLine: true,
        tooltipItems: ['Task 1_1', 'Task 1_2']
      },
      {
        type: 'PRODUCT_INFO',
        name: 'Update Applicants Info & Documents',
        iconClass: 'fa-pencil',
        showLine: true,
        tooltipItems: ['Task 2_1', 'Task 2_2']
      },
      {
        type: 'PRODUCT_INFO',
        name: 'Review Information & Send to Banker',
        iconClass: 'fa-user',
        tooltipItems: ['Task 3_1', 'Task 3_2']
      }
    ];
  }

}
