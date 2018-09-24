import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldConfigArrayCollection, Section } from '../core';
import { EXISTING_CUSTOM_COMPONENTS, CustomComponentsEnum } from '../custom-formly-fields/enums/custom-components.enum';
import { questionnaireActions } from '../store/actions';

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
  fields: any[] = [];
  isReadonly = false;
  showEditButton: boolean = null;
  @Input() formlyFieldConfigArray: FormlyFieldConfigArrayCollection;
  @Input() showEdit: boolean;
  @Input() editableMode = false;
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

    // Todo : Need to add functionality for complex and recurrent  and mix of Complex, simple and recurrent
    this.fields = this.formlyFieldConfigArray.formlyFieldConfigs;
    this.fields.forEach((item) => {
      // /Need to add more If statements for other custom components
      if (EXISTING_CUSTOM_COMPONENTS.includes(item.type)) {
        this.model[item.key] = [{}];
      } else {
        if (item.answers && item.answers.length > 0) {
          this.model[item.key] = item.answers[0].value;
        } else {
          this.model[item.key] = null;
        }
      }
      // console.log(this.form.get(item.key));

      // if (item.answers && item.answers.length > 0 && item.answers[0].validationError) {
      //   this.form.get(item.key)
      //   console.log(item.answers[0].validationError);
      // }

    });





    if (this.showEditButton == null) {
      this.showEditButton = this.showEdit;
    }
  }
  ngOnChanges(changes: SimpleChanges): void {

    // this.fields = this.formlyFieldConfigArray.formlyFieldConfigs;
    this.test();
    if (this.showEditButton == null) {
      this.showEditButton = this.showEdit;
    }
  }


  test() {
    // Todo : Need to add functionality for complex and recurrent  and mix of Complex, simple and recurrent

    setTimeout(() => {
      this.currSection.questions.forEach((item) => {
        if (this.form && this.form.controls && Object.keys(this.form.controls).length > 0) {
          if (item.answers &&
            item.answers.length > 0 &&
            item.answers[0].validationError &&
            item.answers[0].validationError.value
          ) {
            const field = this.fields.find((data) => {
              return data.key === item.id;
            });

            field.validation.show = true;
            // this.form.get(item.id).setErrors({ "server-error": item.answers[0].validationError.value });
            this.form.get(item.id).markAsTouched();

          }
        }
      });
    }, 0);
  }

}
