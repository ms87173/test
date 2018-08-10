import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { QUESTIONS } from '../../../mock-data/questionnaire';
import { USERDATA } from '../../../mock-data/user-data';
import { ApiService } from './api.service';
import { Task } from '../models';
@Injectable()
export class QuestionnaireService {
  constructor(private apiService: ApiService) { }

  getUserData(): Observable<any> {
    return forkJoin([this.getUser(), this.getFields()]);
  }

  getUser() {
    return of(USERDATA);
  }

  getFields() {
    return of(QUESTIONS);
  }
  getDelta() {
    return of([{
      'key': 'likeToEarnInterest1',
      'type': 'radio',
      'templateOptions': {
        'label': 'Would you like to earn interest on this account?',
        'options': [
          {
            'label': 'Yes',
            'value': 'true'
          },
          {
            'label': 'No',
            'value': 'False'
          }
        ]
      }
    }]);
  }

  getCurrentTask(taskId: string): Observable<Task> {
    return this.apiService.get("tasks/" + taskId)
  }
}
