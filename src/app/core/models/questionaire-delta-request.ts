import { Answer } from './answer';

export class QuestionaireDeltaRequest {
  requestId: string;
  workflowId: string;
  taskId: string;
  questionnaireItems: QuestionnaireItem[];

}
export class QuestionnaireItem {
  id: string;
  type: string;
  answers: Answer[];
}
