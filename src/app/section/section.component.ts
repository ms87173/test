import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldConfigArrayCollection, Section } from '../core';
import { EXISTING_CUSTOM_COMPONENTS } from '../custom-formly-fields/enums/custom-components.enum';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit, OnChanges {
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  model: any = {};
  fields: FormlyFieldConfig[] = [];
  isReadonly = false;
  @Input() formlyFieldConfigArray: FormlyFieldConfigArrayCollection;
  @Input() showEdit: boolean = false;
  @Input() editableMode: boolean = false;
  @Input() currSection: Section;

  constructor() {
    console.log("FormlyFieldConfig");
    console.log(this.fields);
  }

  editClicked() {
    this.changeEditableMode(true);
  }

  saveClicked() {
    this.changeEditableMode(false);
  }

  discardClicked() {
    this.changeEditableMode(false);

  }

  changeEditableMode(mode: boolean) {
    this.editableMode = mode;
  }

  ngOnInit() {
    this.fields = this.formlyFieldConfigArray.formlyFieldConfigs;
    this.fields.forEach((item) => {
      // /Need to add more If statements for other custom components
      if (EXISTING_CUSTOM_COMPONENTS.includes(item.type)) {
        this.model[item.key] = [{}];
      }
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.fields = this.formlyFieldConfigArray.formlyFieldConfigs;
  }



}
