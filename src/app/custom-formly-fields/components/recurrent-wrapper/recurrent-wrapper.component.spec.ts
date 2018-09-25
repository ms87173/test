import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurrentWrapperComponent } from './recurrent-wrapper.component';

describe('RecurrentWrapperComponent', () => {
  let component: RecurrentWrapperComponent;
  let fixture: ComponentFixture<RecurrentWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecurrentWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurrentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
