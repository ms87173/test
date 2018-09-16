import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Step } from '../../core/view-model/stepper-step.model';

@Component({
  selector: 'stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})

export class StepperComponent {
  @Input() steps: Array<Step>;
  @Output() clickOnStep = new EventEmitter();
  constructor() { }

  onStepClicked($event) {
    this.clickOnStep.emit($event);
  }
}
