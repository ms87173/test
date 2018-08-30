import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyPhoneConsumerComponent } from './formly-phone-consumer.component';

describe('FormlyPhoneConsumerComponent', () => {
  let component: FormlyPhoneConsumerComponent;
  let fixture: ComponentFixture<FormlyPhoneConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlyPhoneConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyPhoneConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
