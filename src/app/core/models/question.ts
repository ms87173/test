import { Option } from './option';
import { Answer } from './answer';

export class Question {
    id: string;
    label: string;
    type: string;
    tooltipText?: string;
    defaultValue: any;
    required?: boolean;
    readOnly?: boolean;
    placeHolder: string;
    options?: Option[];
    serverErrorMessage?: string;
    minLength?: number;
    maxLength?: number;
    max?: number;
    min?: number;
    disabled = false;
    recurrent = false;
    answers: Answer[] = [];
    lookUpname: string;


}


