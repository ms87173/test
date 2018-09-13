import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { environment } from '../../../environments/environment';

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
        // return this.apiService
        //     .put(url, params);
        return this.apiService.get(url);
    }
    cancelApplicationRequest(data: any): Observable<any> {
        const url = environment.apiUrls.cancelApplicationRequest;
        // return this.apiService.post(url, { data })
        return this.apiService.get(url);
    }
}
