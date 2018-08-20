import { QuestionnaireEffectsService } from './questionnaire-effects.service';
import { ApplicationsEffectsService } from './applications.effects';
import { ApplicationRequestEffects } from './application-request.effects';
import { UserInfoEffectsService } from './user-info.effects';

export const effects: any[] = [
    QuestionnaireEffectsService,
    ApplicationRequestEffects,
    UserInfoEffectsService,
    ApplicationsEffectsService
]

export * from './questionnaire-effects.service';
export * from './user-info.effects';
export * from './questionnaire-effects.service';
export * from './applications.effects';
export * from './application-request.effects';