import { TestBed, inject } from '@angular/core/testing';

import { NgxFormlyParserService } from './ngx-formly-parser.service';

describe('NgxFormlyParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxFormlyParserService]
    });
  });

  it('should be created', inject([NgxFormlyParserService], (service: NgxFormlyParserService) => {
    expect(service).toBeTruthy();
  }));
});
