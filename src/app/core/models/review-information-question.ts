import { Answer } from ".";

export class ReviewInformationQuestion {

    id: string;
    label: string;
    type: string;
    recurrent: boolean = false;
    readOnly: boolean = false;
    answers: Answer[] = []

}