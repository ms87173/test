import { Option } from "./option";

export class Question {
    id:string;
    label:string;
    type:string;
    tooltipText:string;
    defaultValue:any;
    required:boolean;
    readOnly: boolean;
    placeHolder: string;
    options:Option[];

}

