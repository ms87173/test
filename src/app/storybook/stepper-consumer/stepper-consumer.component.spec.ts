import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperConsumerComponent } from './stepper-consumer.component';

describe('StepperConsumerComponent', () => {
  let component: StepperConsumerComponent;
  let fixture: ComponentFixture<StepperConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
