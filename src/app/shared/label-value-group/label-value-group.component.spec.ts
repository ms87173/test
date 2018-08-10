import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelValueGroupComponent } from './label-value-group.component';

describe('LabelValueGroupComponent', () => {
  let component: LabelValueGroupComponent;
  let fixture: ComponentFixture<LabelValueGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelValueGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelValueGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
