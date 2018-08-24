import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyConsumerComponent } from './formly-consumer.component';

describe('FormlyConsumerComponent', () => {
  let component: FormlyConsumerComponent;
  let fixture: ComponentFixture<FormlyConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlyConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
