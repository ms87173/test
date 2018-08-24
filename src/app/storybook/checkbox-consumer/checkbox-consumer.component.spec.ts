import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxConsumerComponent } from './checkbox-consumer.component';

describe('CheckboxConsumerComponent', () => {
  let component: CheckboxConsumerComponent;
  let fixture: ComponentFixture<CheckboxConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
