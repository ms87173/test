import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdoApplicationRequestReviewInformationComponent } from './ddo-application-request-review-information.component';

describe('DdoApplicationRequestReviewInformationComponent', () => {
  let component: DdoApplicationRequestReviewInformationComponent;
  let fixture: ComponentFixture<DdoApplicationRequestReviewInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdoApplicationRequestReviewInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdoApplicationRequestReviewInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
