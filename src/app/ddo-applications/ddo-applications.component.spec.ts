import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdoApplicationsComponent } from './ddo-applications.component';

describe('DdoApplicationsComponent', () => {
  let component: DdoApplicationsComponent;
  let fixture: ComponentFixture<DdoApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdoApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdoApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
