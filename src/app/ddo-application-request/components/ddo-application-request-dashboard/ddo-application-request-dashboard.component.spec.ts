import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdoApplicationRequestDashboardComponent } from './ddo-application-request-dashboard.component';

describe('DdoApplicationRequestDashboardComponent', () => {
  let component: DdoApplicationRequestDashboardComponent;
  let fixture: ComponentFixture<DdoApplicationRequestDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdoApplicationRequestDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdoApplicationRequestDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
