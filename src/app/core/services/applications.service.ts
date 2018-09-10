import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApplicationsService {
  constructor(private apiService: ApiService) { }
  getApplications(): Observable<any[]> {
    const url = environment.apiUrls.fetchAllApplications;
    return this.apiService.get(url);
  }
}
