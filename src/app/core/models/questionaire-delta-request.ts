export class QuestionaireDeltaRequest {
  requestId: string;
  workflowId: string;
  taskId: string;
  questionnaireItems:QuestionnaireItem[]
 
}
export class QuestionnaireItem{
  questionId: string;
  type: string;
  answerKey: string;
}
