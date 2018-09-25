import { Component, OnInit } from '@angular/core';
import { Step } from '../../core/view-model/stepper-step.model';

@Component({
  selector: 'stepper-consumer',
  templateUrl: './stepper-consumer.component.html',
  styleUrls: ['./stepper-consumer.component.scss']
})
export class StepperConsumerComponent implements OnInit {
  steps: any;
  constructor() { }
  ngOnInit() {
    this.steps = [
      {
        name: 'Update Product Info',
        iconClass: 'fa-sliders',
        showLine: false,
        tooltipItems: ['Task 1_1', 'Task 1_2'],
        showTooltip: true,
        status: 'completed',
        statusIconClass: 'fa-check',
        stepCssClass: 'step-circle--completed',
        disabled: false
      },
      {
        name: 'Update Applicants Info & Documents',
        iconClass: 'fa-pencil',
        showLine: true,
        tooltipItems: ['Task 2_1', 'Task 2_2'],
        showTooltip: true,
        status: 'pending',
        stepCssClass: 'step-circle--active',
        disabled: false
      },
      {
        name: 'Review Information & Send to Banker',
        iconClass: 'fa-file-text-o',
        tooltipItems: ['Task 3_1', 'Task 3_2'],
        showTooltip: true,
        status: 'not-started',
        stepCssClass: 'step-circle--disabled',
        showLine: true,
        disabled: false,
        lineCssClass: 'solid-grey-line'
      },
      {
        name: 'Clients',
        iconClass: 'fa-user-o',
        tooltipItems: ['Task 4_1', 'Task 4_2'],
        showTooltip: false,
        status: 'not-started',
        stepCssClass: 'step-circle--forbidden',
        showLine: true,
        disabled: true,
        lineCssClass: 'dashed-grey-line'
      },
      {
        name: 'Banker',
        iconClass: 'fa-bank',
        tooltipItems: ['Task 5_1', 'Task 5_2'],
        showTooltip: false,
        status: 'not-started',
        stepCssClass: 'step-circle--forbidden',
        showLine: true,
        disabled: true,
        lineCssClass: 'dashed-grey-line'
      }
    ];
  }
  anyFunction($event) {
    // console.log($event);
  }
}
