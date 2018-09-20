import { Injectable } from '@angular/core';
import { ApiService } from '.';
import { SignAndSubmitRequest, SignAndSubmit, AgreeAndSubmitRequest } from '../models';
import { environment } from '../../../environments/environment.dev';
import { Observable, of } from 'rxjs';

@Injectable(
)
export class SignAndSubmitService {

  getSignAndSubmitTask(signAndSubmitRequest: SignAndSubmitRequest): Observable<SignAndSubmit> {
    const url = environment.apiUrls.signAndSubmitTask;
    return this.apiService
      .get(`${url}/${signAndSubmitRequest.taskId}`);
    // Todo: Uncomment to use Production Url
    // return this.apiService
    //   .post(url, signAndSubmitRequest);
  }

  agreeAndSubmitApplication(agreeAndSubmitRequest:AgreeAndSubmitRequest): Observable<any>{
    const url = environment.apiUrls.agreeAndSubmitApplication;
    return of({})
  // Todo: Uncomment to use Production Url
  // return this.apiService
  //   .post(url, agreeAndSubmitRequest);
  }

  constructor(private apiService: ApiService) { }
}
