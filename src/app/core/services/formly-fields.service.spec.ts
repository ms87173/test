import { TestBed, inject } from '@angular/core/testing';

import { FormlyFieldsService } from './formly-fields.service';

describe('FormlyFieldsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormlyFieldsService]
    });
  });

  it('should be created', inject([FormlyFieldsService], (service: FormlyFieldsService) => {
    expect(service).toBeTruthy();
  }));
});
