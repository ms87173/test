import { Injectable } from '@angular/core';
import { ApiService } from '.';
import { Task,
         SignAndSubmitRequest,
         SignAndSubmitDeltaRequest,
         SignAndSubmitDeltaError,
         SignAndSubmit,
         AgreeAndSubmitRequest } from '../models';
import { environment } from '../../../environments/environment.dev';
import { Observable, of } from 'rxjs';

@Injectable(
)
export class SignAndSubmitService {

  getSignAndSubmitTask(signAndSubmitRequest: SignAndSubmitRequest): Observable<SignAndSubmit> {
    const url = environment.apiUrls.signAndSubmitTask;
    // return this.apiService
    //   .get(`${url}/${signAndSubmitRequest.taskId}`);
    // Todo: Uncomment to use Production Url
    return this.apiService
      .post(url, signAndSubmitRequest);
  }

  getFieldChangeDelta(deltaRequest: SignAndSubmitDeltaRequest): Observable<Task> {
    // Todo: uncomment to use mock service
    // switch (deltaRequest.questionnaireItems[0].id) {
    //   case 'InterestCheckingCheckBox':
    //     return this.apiService.get('questionnaireDeltaResponses/12');

    //   case 'SavingAccountTextBox':
    //     return this.apiService.get('questionnaireDeltaResponses/12');

    //   case 'ColorInputBox':
    //     return this.apiService.get('questionnaireDeltaResponses/12');

    //   default:
    //     return of(null);
    // }

    // Todo : Production Url
    console.log(deltaRequest, ':::delta');
    return this.apiService
      .post(environment.apiUrls.fetchTaskQuestionnaireDelts, deltaRequest);
  }

  agreeAndSubmitApplication(agreeAndSubmitRequest:AgreeAndSubmitRequest): Observable<any>{
    const url = environment.apiUrls.agreeAndSubmitApplication;
    // return of({})
  // Todo: Uncomment to use Production Url
  return this.apiService
    .put(url, agreeAndSubmitRequest);
  }

  constructor(private apiService: ApiService) { }
}
