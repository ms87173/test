import { TestBed, inject } from '@angular/core/testing';

import { QuestionnaireEffectsService } from './questionnaire-effects.service';

describe('QuestionnaireEffectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionnaireEffectsService]
    });
  });

  it('should be created', inject([QuestionnaireEffectsService], (service: QuestionnaireEffectsService) => {
    expect(service).toBeTruthy();
  }));
});
