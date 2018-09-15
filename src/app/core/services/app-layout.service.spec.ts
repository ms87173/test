import { TestBed, inject } from '@angular/core/testing';

import { AppLayoutService } from './app-layout.service';

describe('AppLayoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppLayoutService]
    });
  });

  it('should be created', inject([AppLayoutService], (service: AppLayoutService) => {
    expect(service).toBeTruthy();
  }));
});
