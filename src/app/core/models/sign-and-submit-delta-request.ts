import { Answer } from "./answer";

export class SignAndSubmitDeltaRequest {
  requestId: string;
  workflowId: string;
  taskId: string;
  questionnaireItems:SignAndSubmitQuestionnaireItem[]
 
}
export class SignAndSubmitQuestionnaireItem{
  id: string;
  type: string;
  answers:Answer[]
}
