import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldConfigArrayCollection, Section } from '../core';
import { EXISTING_CUSTOM_COMPONENTS, CustomComponentsEnum } from '../custom-formly-fields/enums/custom-components.enum';
import { questionnaireActions } from '../store/actions'

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
  showEditButton: boolean = null;
  @Input() formlyFieldConfigArray: FormlyFieldConfigArrayCollection;
  @Input() showEdit: boolean;
  @Input() editableMode: boolean = false;
  @Input() currSection: Section;
  @Output() updateOpenSections: EventEmitter<{ actionName: string, sectionId: string }> = new EventEmitter();
  @Output() saveChangesBtnClicked: EventEmitter<string> = new EventEmitter();
  @Output() discardChangesBtnClicked: EventEmitter<string> = new EventEmitter();
  CustomComponentsEnum = CustomComponentsEnum;
  constructor() {

  }

  editClicked(sectionId: string) {
    this.updateOpenSections.emit({
      actionName: questionnaireActions.ActionTypes.PUSH_SECTION_IN_OPEN_SECTIONS,
      sectionId: sectionId
    });

  }

  saveClicked(sectionId: string) {
    this.saveChangesBtnClicked.emit(sectionId);

    this.updateOpenSections.emit({
      actionName: questionnaireActions.ActionTypes.POP_SECTION_IN_OPEN_SECTIONS,
      sectionId: sectionId
    });

  }

  discardClicked(sectionId: string) {
    this.discardChangesBtnClicked.emit(sectionId);
    this.updateOpenSections.emit({
      actionName: questionnaireActions.ActionTypes.POP_SECTION_IN_OPEN_SECTIONS,
      sectionId: sectionId
    });
  }


  ngOnInit() {
    this.fields = this.formlyFieldConfigArray.formlyFieldConfigs;
    this.fields.forEach((item) => {
      // /Need to add more If statements for other custom components
      if (EXISTING_CUSTOM_COMPONENTS.includes(item.type)) {
        this.model[item.key] = [{}];
      }
    });

    if (this.showEditButton == null) {
      this.showEditButton = this.showEdit;
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.fields = this.formlyFieldConfigArray.formlyFieldConfigs;
    if (this.showEditButton == null) {
      this.showEditButton = this.showEdit;
    }
  }



}
