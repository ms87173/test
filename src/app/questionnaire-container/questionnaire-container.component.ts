import { Component, OnInit, ViewEncapsulation, OnDestroy, ChangeDetectorRef, } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FormlyConfig } from '@ngx-formly/core';
import { Store, select } from '@ngrx/store';
import { fromRootReducers, fromRootActions, fromRootSelectors } from '../store'
import { QuestionaireDeltaResponse, QuestionaireDeltaError } from '../core/models';
import { takeWhile } from 'rxjs/operators';
import { NgxFormlyParserService, QuestionnaireService, ApiService } from '../core/services';
import { Task } from '../core/models';

@Component({
  selector: 'questionnaire-container',
  templateUrl: './questionnaire-container.component.html',
  styleUrls: ['./questionnaire-container.component.scss']
})
export class QuestionnaireContainerComponent implements OnInit, OnDestroy {
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  model: any = {}
  fields: FormlyFieldConfig[];
  currentTask: Task;
  currentFieldChange: QuestionaireDeltaResponse;
  mergedCurrentTaskWithDelta: Task;
  currentQuestionId: string;
  questionnaireFormErrors: QuestionaireDeltaError[];
  isComponentActive = true;


  constructor(
    private questionnaireService: QuestionnaireService,
    private apiService: ApiService,
    private cd: ChangeDetectorRef,
    private ngxFormlyParserService: NgxFormlyParserService,
    private store: Store<fromRootReducers.AppState>,
    fb: FormBuilder
  ) {



    this.form = fb.group({});

    this.store.dispatch(new fromRootActions.questionnaireActions.GetCurrentTask('1'));

    this.store.pipe(select(fromRootSelectors.questionnaireSelectors.getCurrentTask),
      takeWhile(() => this.isComponentActive)
    ).subscribe(
      (currTask) => {

        if (currTask) {
          this.currentTask = currTask;
          this.store.dispatch(new fromRootActions
            .questionnaireActions
            .GetCurrentFormlyConfig({ task: this.currentTask, currentQuestionId: this.currentQuestionId }));
        }
      }
    );

    this.store.pipe(select(fromRootSelectors.questionnaireSelectors.getCurrentQuestionnaireConfig),
      takeWhile(() => this.isComponentActive)
    ).subscribe((formlyConfig) => {
      if (formlyConfig) {
        this.fields = formlyConfig;
        this.cd.detectChanges();


        if (this.currentFieldChange && this.questionnaireFormErrors) {
          this.questionnaireFormErrors.forEach((errorField) => {
            this.form.get(errorField.id)
              .setErrors({ 'server-error': errorField.errorMessage });
            this.form.get(errorField.id).markAsTouched();

          });
        }

      }
    });


    this.store.pipe(select(fromRootSelectors.questionnaireSelectors.getCurrentQuestionnaireErrors),
      takeWhile(() => this.isComponentActive)
    ).subscribe((questionnaireFormErrors) => {
      this.questionnaireFormErrors = questionnaireFormErrors;
    });


    this.store.pipe(select(fromRootSelectors.questionnaireSelectors.getCurrentQuestionnaireDelta),
      takeWhile(() => this.isComponentActive)
    ).subscribe((fieldChangeDelta) => {
      if (fieldChangeDelta) {
        this.currentFieldChange = fieldChangeDelta;
        this.store.dispatch(new fromRootActions.questionnaireActions.SetQuestionnaireErrors(this.currentFieldChange.errors));
        this.store.dispatch(new fromRootActions.questionnaireActions.MergeDeltaFieldChangeAndCurrentTask(
          {
            currentTask: this.currentTask,
            delta: this.currentFieldChange,
            model: this.model
          }
        ));
        this.cd.detectChanges();
      }
    });

    this.store.pipe(select(fromRootSelectors.questionnaireSelectors.getCurrentQuestionId),
      takeWhile(() => this.isComponentActive)
    ).subscribe((currentQuestionId) => {
      if (currentQuestionId) {
        this.currentQuestionId = currentQuestionId;
      }
    });



    this.store.pipe(select(fromRootSelectors.questionnaireSelectors.getMergedCurrentTaskWithDelta),
      takeWhile(() => this.isComponentActive)
    ).subscribe((mergedCurrentTaskWithDelta) => {
      if (mergedCurrentTaskWithDelta) {
        this.mergedCurrentTaskWithDelta = mergedCurrentTaskWithDelta;
        this.store.dispatch(new fromRootActions.questionnaireActions.UpdateCurrentTask(this.mergedCurrentTaskWithDelta));
      }
    });

  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.isComponentActive = false;
    this.store.dispatch(new fromRootActions.questionnaireActions.ResetQuestionnaireState());

  }
}


