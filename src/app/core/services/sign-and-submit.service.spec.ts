import { TestBed, inject } from '@angular/core/testing';

import { SignAndSubmitService } from './sign-and-submit.service';

describe('SignAndSubmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignAndSubmitService]
    });
  });

  it('should be created', inject([SignAndSubmitService], (service: SignAndSubmitService) => {
    expect(service).toBeTruthy();
  }));
});
