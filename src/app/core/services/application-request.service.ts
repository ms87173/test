import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class ApplicationRequestService {
    constructor(private apiService: ApiService) { }
    getApplicationRequest(id: string): Observable<any> {
        // return this.apiService.post('application', { id });
        return this.apiService.get('request');
    }
    getApplicationRequestWorkflows(id: string): Observable<any> {
        // return this.apiService.post('applications/workflows', { id });
        return this.apiService.get('workflows');
    }
}