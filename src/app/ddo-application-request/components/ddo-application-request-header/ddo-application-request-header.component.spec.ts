import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdoApplicationRequestCancelComponent } from './ddo-application-request-header.component';

describe('DdoApplicationRequestCancelComponent', () => {
  let component: DdoApplicationRequestCancelComponent;
  let fixture: ComponentFixture<DdoApplicationRequestCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdoApplicationRequestCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdoApplicationRequestCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
