import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireContainerComponent } from './questionnaire-container.component';

describe('QuestionnaireContainerComponent', () => {
  let component: QuestionnaireContainerComponent;
  let fixture: ComponentFixture<QuestionnaireContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
