import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdoApplicationRequestReviewInformationWorkflowComponent } from './ddo-application-request-review-information-workflow.component';

describe('DdoApplicationRequestReviewInformationWorkflowComponent', () => {
  let component: DdoApplicationRequestReviewInformationWorkflowComponent;
  let fixture: ComponentFixture<DdoApplicationRequestReviewInformationWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdoApplicationRequestReviewInformationWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdoApplicationRequestReviewInformationWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
