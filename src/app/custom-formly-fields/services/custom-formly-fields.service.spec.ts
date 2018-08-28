import { TestBed, inject } from '@angular/core/testing';

import { CustomFormlyFieldsService } from './custom-formly-fields.service';

describe('CustomFormlyFieldsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomFormlyFieldsService]
    });
  });

  it('should be created', inject([CustomFormlyFieldsService], (service: CustomFormlyFieldsService) => {
    expect(service).toBeTruthy();
  }));
});
