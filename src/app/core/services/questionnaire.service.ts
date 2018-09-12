import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import {
  Task,
  QuestionaireDeltaResponse,
  QuestionaireDeltaRequest,
  TaskRequest
} from '../models';
import { environment } from '../../../environments/environment';

@Injectable()
export class QuestionnaireService {
  constructor(private apiService: ApiService) { }


  getCurrentTask(taskRequest: TaskRequest): Observable<Task> {
    const url = environment.apiUrls.fetchTaskQuestionnaire;
    return this.apiService
      .get(`${url}/${taskRequest.taskId}`);
    // Todo: Uncomment to use Production Url
    // return this.apiService
    //   .post(url, taskRequest);
  }

  getFieldChangeDelta(deltaRequest: QuestionaireDeltaRequest): Observable<Task> {

    // Todo: uncomment to use mock service
    switch (deltaRequest.questionnaireItems[0].id) {
      case 'InterestCheckingCheckBox':
        return this.apiService.get('questionnaireDeltaResponses/12');

      case 'SavingAccountTextBox':
        return this.apiService.get('questionnaireDeltaResponses/12');

      case 'ColorInputBox':
        return this.apiService.get('questionnaireDeltaResponses/12');

      default:
        return of(null);
    }

    // Todo : Production Url
    // return this.apiService
    //   .post(environment.apiUrls.fetchTaskQuestionnaireDelts, deltaRequest);
  }
  getCountryCode(): Observable<any[]> {
    return this.apiService.get('countryCode');
  }

}
