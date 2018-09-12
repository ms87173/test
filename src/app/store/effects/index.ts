import { QuestionnaireEffectsService } from './questionnaire-effects.service';
import { ApplicationRequestEffects } from './application-request.effects';
import { UserInfoEffectsService } from './user-info.effects';
import { RouterEffects } from './router.effects';
import { ApplicationWorkflowsEffects } from './workflows.effects';
import { TasksEffects } from './tasks.effects';
import { ApplicationReviewInformationEffects } from './review-information.effects';

export const effects: any[] = [
    QuestionnaireEffectsService,
    ApplicationRequestEffects,
    UserInfoEffectsService,
    RouterEffects,
    ApplicationWorkflowsEffects,
    TasksEffects,
    ApplicationReviewInformationEffects
]

export * from './questionnaire-effects.service';
export * from './user-info.effects';
export * from './questionnaire-effects.service';
export * from './application-request.effects';
export * from './router.effects';
export * from './workflows.effects';
export * from './tasks.effects';
export * from './review-information.effects';