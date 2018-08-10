import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdoApplicationsGridComponent } from './ddo-applications-grid.component';

describe('DdoApplicationsGridComponent', () => {
  let component: DdoApplicationsGridComponent;
  let fixture: ComponentFixture<DdoApplicationsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdoApplicationsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdoApplicationsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
