import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileConsumerComponent } from './tile-consumer.component';

describe('TileConsumerComponent', () => {
  let component: TileConsumerComponent;
  let fixture: ComponentFixture<TileConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
