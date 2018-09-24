import { SignAndSubmitDeltaQuestion } from './sign-and-submit-delta-question';
import { SignAndSubmitDeltaError } from './sign-and-submit-delta-error';

export class SignAndSubmitDeltaResponse {
    new: SignAndSubmitDeltaQuestion [];
    update: SignAndSubmitDeltaQuestion[];
    delete: SignAndSubmitDeltaQuestion[];
    errors: SignAndSubmitDeltaError[];
}
