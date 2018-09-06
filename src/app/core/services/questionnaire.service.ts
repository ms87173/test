import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { Task, QuestionaireDeltaResponse, QuestionaireDeltaRequest, TaskRequest } from '../models';
@Injectable()
export class QuestionnaireService {
  constructor(private apiService: ApiService) { }

  // getUserData(): Observable<any> {
  //   return forkJoin([this.getUser(), this.getFields()]);
  // }

  // getUser() {
  //   return of(USERDATA);
  // }

  // getFields() {
  //   return of(QUESTIONS);
  // }
  // getDelta() {
  //   return of([{
  //     'key': 'likeToEarnInterest1',
  //     'type': 'radio',
  //     'templateOptions': {
  //       'label': 'Would you like to earn interest on this account?',
  //       'options': [
  //         {
  //           'label': 'Yes',
  //           'value': 'true'
  //         },
  //         {
  //           'label': 'No',
  //           'value': 'False'
  //         }
  //       ]
  //     }
  //   }]);
  // }


  // getCurrentTask(taskId: string): Observable<Task> {
  //   return this.apiService.get<Task>('tasks/' + taskId);

  // }
  // getFieldChangeDelta(deltaRequest: QuestionaireDeltaRequest): Observable<QuestionaireDeltaResponse> {
  //   switch (deltaRequest.id) {
  //     case 'InterestCheckingCheckBox':
  //       return this.apiService.get<QuestionaireDeltaResponse>('questionnaireDeltaResponses/1');

  //     case 'SavingAccountTextBox':
  //       return this.apiService.get<QuestionaireDeltaResponse>('questionnaireDeltaResponses/2');


  //     case 'ColorInputBox':
  //       return this.apiService.get<QuestionaireDeltaResponse>('questionnaireDeltaResponses/3');

  //     default:

  //       return Observable.of(null);
  //   }
  // }

  getCurrentTask(taskRequest: TaskRequest): Observable<Task> {
    // return this.apiService.get('tasks/' + taskRequest.taskId);
    //Todo: Uncomment to use Production Url
    return this.apiService.post("api/ddo/questionnaire/taskQuestions",taskRequest);
  }

  getFieldChangeDelta(deltaRequest: QuestionaireDeltaRequest): Observable<Task> {

   // Todo: uncomment to use mock service
    switch (deltaRequest.questionnaireItems[0].id) {
      
      case 'InterestCheckingCheckBox':
        return this.apiService.get('questionnaireDeltaResponses/1');

      case 'SavingAccountTextBox':
        return this.apiService.get('questionnaireDeltaResponses/2');

      case 'ColorInputBox':
        return this.apiService.get('questionnaireDeltaResponses/3');

      default:
        return of(null);
    }

    //Todo : Production Url
    // return this.apiService.post("api/ddo/questionnaire/tasks/question",deltaRequest)
  }
  getCountryCode(): Observable<any[]> {
    return this.apiService.get('countryCode');
  }

}
