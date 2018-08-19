import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdoApplicationRequestComponent } from './ddo-application-request.component';

describe('DdoApplicationRequestComponent', () => {
  let component: DdoApplicationRequestComponent;
  let fixture: ComponentFixture<DdoApplicationRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdoApplicationRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdoApplicationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
