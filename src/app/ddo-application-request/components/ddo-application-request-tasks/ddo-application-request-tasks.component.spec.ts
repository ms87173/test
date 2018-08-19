import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdoApplicationRequestTasksComponent } from './ddo-application-request-tasks.component';

describe('DdoApplicationRequestTasksComponent', () => {
  let component: DdoApplicationRequestTasksComponent;
  let fixture: ComponentFixture<DdoApplicationRequestTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdoApplicationRequestTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdoApplicationRequestTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
