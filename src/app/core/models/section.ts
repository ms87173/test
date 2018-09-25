import { Question } from './question';

export class Section {
    id: string;
    title: string;
    editableMode = false;
    questions: Question[];
}
