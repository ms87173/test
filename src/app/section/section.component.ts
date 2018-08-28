import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldConfigArrayCollection } from '../core';

@Component({
  selector: 'section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit, OnChanges {
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  model: any = {};
  fields: FormlyFieldConfig[] = [];
  @Input() formlyFieldConfigArray: FormlyFieldConfigArrayCollection;

  constructor() { }

  ngOnInit() {
    this.fields = this.formlyFieldConfigArray.formlyFieldConfigs;
    this.fields.forEach((item) => {
      ///Need to add more If statements for other custom components
      if (item.type == "custom-address-field") {
        this.model[item.key]=[{}];
      }
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.fields = this.formlyFieldConfigArray.formlyFieldConfigs;
  }


}
