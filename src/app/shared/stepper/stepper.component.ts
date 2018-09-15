import { Component, OnInit } from '@angular/core';
import { Step } from './step.model';
import * as $ from 'jquery';

@Component({
  selector: 'stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})

export class StepperComponent implements OnInit {
  steps: Array<Step>;
  constructor() { }

  ngOnInit() {
    // type will determine iconClass
    // stepCssClass will be determined by status
    // tooltipItems will be determine by Tasks Name in it.
    // status will be determine by workflow status.
    // view model
    const iconClassMapping = {
      PRODUCTS_INFO: 'fa-sliders',
      APPLICANTS_INFO: 'fa-pencil',
      REVIEW_SUBMIT: 'fa-file-text-o',
      CLIENTS: 'fa-user',
      BANKER: 'fa-users'
    };
    const disabledMapping = {
      IN_PROGRESS: false,
      COMPLETED: false,
      ON_HOLD: true
    };
    const statusIconClassMapping = {
      COMPLETED: 'fa-check',
      IN_PROGRESS: '',
      ON_HOLD: ''
    };
    const stepCssClass = {
      COMPLETED: 'step-circle--completed',
      IN_PROGRESS: 'step-circle--active'
    };
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
        disabled: false,
        lineCssClass: ''
      },
      {
        name: 'Update Applicants Info & Documents',
        iconClass: 'fa-pencil',
        showLine: true,
        tooltipItems: ['Task 2_1', 'Task 2_2'],
        showTooltip: true,
        status: 'pending',
        statusIconClass: '',
        stepCssClass: 'step-circle--active',
        disabled: false,
        lineCssClass: ''
      },
      {
        name: 'Review Information & Send to Banker',
        iconClass: 'fa-file-text-o',
        tooltipItems: ['Task 3_1', 'Task 3_2'],
        showTooltip: true,
        status: 'not-started',
        statusIconClass: '',
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
        statusIconClass: '',
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
        statusIconClass: '',
        stepCssClass: 'step-circle--forbidden',
        showLine: true,
        disabled: true,
        lineCssClass: 'dashed-grey-line'
      }
    ];
  }

  stepClicked(item) {
    console.log(item);
  }
}
