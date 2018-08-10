import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelValueConsumerComponent } from './label-value-consumer.component';

describe('LabelValueConsumerComponent', () => {
  let component: LabelValueConsumerComponent;
  let fixture: ComponentFixture<LabelValueConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelValueConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelValueConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
