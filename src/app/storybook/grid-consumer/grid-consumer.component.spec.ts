import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridConsumerComponent } from './grid-consumer.component';

describe('GridConsumerComponent', () => {
  let component: GridConsumerComponent;
  let fixture: ComponentFixture<GridConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
