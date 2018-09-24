import { Component, Input, EventEmitter, Output, OnChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class StepComponent implements OnChanges {
  @Input() config: any;
  @Output() stepClick = new EventEmitter();
  iconClass: string;
  showLine: boolean;
  text: string;
  lineCssClass: string;
  stepCssClass: string;
  tooltipItems: any;
  iconText: string;

  constructor() { }

  ngOnChanges() {
    if (this.config) {
      this.iconClass = this.config.iconClass;
      this.iconText = this.config.iconText || '';
      this.showLine = this.config.showLine;
      this.text = this.config.text;
      this.lineCssClass = this.config.lineCssClass || 'solid-black-line';
      this.stepCssClass = this.config.stepCssClass || '';
    }
  }

  onStepClick() {
    if (!this.config.disabled) {
      this.stepClick.emit(this.config);
    }
  }

}
