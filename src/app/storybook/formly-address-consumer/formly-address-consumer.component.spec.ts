import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyAddressConsumerComponent } from './formly-address-consumer.component';

describe('FormlyAddressConsumerComponent', () => {
  let component: FormlyAddressConsumerComponent;
  let fixture: ComponentFixture<FormlyAddressConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlyAddressConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyAddressConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
