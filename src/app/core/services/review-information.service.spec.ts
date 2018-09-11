import { TestBed, inject } from '@angular/core/testing';

import { ReviewInformationService } from './review-information.service';

describe('ReviewInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReviewInformationService]
    });
  });

  it('should be created', inject([ReviewInformationService], (service: ReviewInformationService) => {
    expect(service).toBeTruthy();
  }));
});
