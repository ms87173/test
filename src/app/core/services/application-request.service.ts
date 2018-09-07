import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class ApplicationRequestService {
    constructor(private apiService: ApiService) { }
    getApplicationRequest(requestId: string): Observable<any> {

        // Todo: Production Url
        return this.apiService.post('api/ddo/request/details', { requestId });
        // return this.apiService.get('request');
    }
    getApplicationRequestWorkflows(requestId: string): Observable<any[]> {
        // Todo: Production Url
        return this.apiService.post('api/ddo/request/workflowsAndTasks', { requestId });
        // return this.apiService.get('workflows');
    }
    saveApplicationRequestTask({ requestId, workflowId, taskId }): Observable<any> {
        return this.apiService.put('api/ddo/questionnaire/saveTaskQuestions', {
            requestId, workflowId, taskId
        });
        // return of({
        //     status: 200
        // });
    }
}
