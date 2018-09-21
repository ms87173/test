import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdoApplicationRequestSuccessComponent } from './ddo-application-request-success.component';

describe('DdoApplicationRequestSuccessComponent', () => {
  let component: DdoApplicationRequestSuccessComponent;
  let fixture: ComponentFixture<DdoApplicationRequestSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdoApplicationRequestSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdoApplicationRequestSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
