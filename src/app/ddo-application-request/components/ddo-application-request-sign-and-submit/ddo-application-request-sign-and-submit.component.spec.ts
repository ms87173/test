import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdoApplicationRequestSignAndSubmitComponent } from './ddo-application-request-sign-and-submit.component';

describe('DdoApplicationRequestSignAndSubmitComponent', () => {
  let component: DdoApplicationRequestSignAndSubmitComponent;
  let fixture: ComponentFixture<DdoApplicationRequestSignAndSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdoApplicationRequestSignAndSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdoApplicationRequestSignAndSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
