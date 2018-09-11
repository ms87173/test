import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdoApplicationRequestReviewInformationTaskComponent } from './ddo-application-request-review-information-task.component';

describe('DdoApplicationRequestReviewInformationTaskComponent', () => {
  let component: DdoApplicationRequestReviewInformationTaskComponent;
  let fixture: ComponentFixture<DdoApplicationRequestReviewInformationTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdoApplicationRequestReviewInformationTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdoApplicationRequestReviewInformationTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
