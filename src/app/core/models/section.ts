import { Question } from './question';

export class Section {
    title: string;
    editableMode: boolean = false;
    questions: Question[]
}