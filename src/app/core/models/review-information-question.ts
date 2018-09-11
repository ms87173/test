import { Answer } from "src/app/core/models";

export class ReviewInformationQuestion {

    id: string;
    label: string;
    type: string;
    recurrent: boolean;
    readOnly: boolean
    answers :Answer[] =[]

}