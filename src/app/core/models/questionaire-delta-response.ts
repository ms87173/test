import { QuestionaireDeltaQuestion } from './questionaire-delta-question';
import { QuestionaireDeltaError } from './questionaire-delta-error';

export class QuestionaireDeltaResponse {
    new: QuestionaireDeltaQuestion[];
    update: QuestionaireDeltaQuestion[];
    delete: QuestionaireDeltaQuestion[];
    errors: QuestionaireDeltaError[];
}
