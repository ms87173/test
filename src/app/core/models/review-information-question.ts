import { Answer } from "src/app/core/models";

export class ReviewInformationQuestion {

    id: string;
    label: string;
    type: string;
    recurrent: boolean = false;
    readOnly: boolean = false;
    answers: Answer[] = []

}