import { Answer } from '.';

export class ReviewInformationQuestion {

    id: string;
    label: string;
    type: string;
    recurrent = false;
    readOnly = false;
    answers: Answer[] = [];

}
