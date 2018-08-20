import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { WORKFLOWSANDTASKS } from '../../../mock-data/workflows-tasks';
@Injectable()
export class WorkflowsTasksService {

  constructor(private http: HttpClient) { }
  getWorkFlowsAndTasks(): Observable<any> {
    return of(WORKFLOWSANDTASKS);
  }

}
