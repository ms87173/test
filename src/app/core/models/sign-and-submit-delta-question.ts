import { Option } from './option';

export class SignAndSubmitDeltaQuestion {
    
    id:string;
    label:string;
    type:string;
    required:boolean;
    readOnly:boolean;
    placeHolder:string;
    options:Option[];  
    tooltipText:string;
    defaultValue:any;
    sectionName:string;
    ///To be null in case Delta Type Update and delete
    questionIdAfterToBeInserted:string;

    
    
}
