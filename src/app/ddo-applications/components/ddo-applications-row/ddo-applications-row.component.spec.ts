import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdoApplicationsRowComponent } from './ddo-applications-row.component';

describe('DdoApplicationsRowComponent', () => {
  let component: DdoApplicationsRowComponent;
  let fixture: ComponentFixture<DdoApplicationsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdoApplicationsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdoApplicationsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
