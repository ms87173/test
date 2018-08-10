import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupWrapperComponent } from './form-group-wrapper.component';

describe('FormGroupWrapperComponent', () => {
  let component: FormGroupWrapperComponent;
  let fixture: ComponentFixture<FormGroupWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGroupWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
