import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { environment } from '../../../environments/environment';
import { TaskRequest } from '../models';

@Injectable()
export class ApplicationRequestService {
    constructor(private apiService: ApiService) { }
    getApplicationRequest(requestId: string): Observable<any> {
        const url = environment.apiUrls.fetchApplication;
        // TODO: Production Url
        // return this.apiService
        //     .post(url, { requestId });
        return this.apiService.get(url);
    }
    getApplicationRequestWorkflows(requestId: string): Observable<any[]> {
        const url = environment.apiUrls.fetchWorkflowsAndTasks;
        // TODO: Production Url
        // return this.apiService
        //     .post(url, { requestId });
        return this.apiService.get(url);
    }
    saveApplicationRequestTask(params: Object): Observable<any> {
        const url = environment.apiUrls.saveTaskQuestionnaire;
        console.log("Task Saved");
        // return this.apiService
        //     .put(url, params);
        return of("Task Saved");
    }

    discardApplicationRequestTask(params: TaskRequest): Observable<any> {
        const url = environment.apiUrls.discardQuestionsChanges;
        console.log("Task discarded");

        // return this.apiService
        //     .put(url, params);
        return of("Task discard");
    }
    cancelApplicationRequest(data: any): Observable<any> {
        const url = environment.apiUrls.cancelApplicationRequest;
        // return this.apiService.post(url, { data })
        return this.apiService.get(url);
    }
}
