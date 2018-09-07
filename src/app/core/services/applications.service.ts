import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class ApplicationsService {
  constructor(private apiService: ApiService) { }
  getApplications(): Observable<any[]> {

    ///Todo : Production Url
    //  return this. apiService.get("api/ddo/request/all");
    return this.apiService.get('requests');
  }
  //TODO: remove this as we are doing sorting on our end
  sortApplications(orderBy: string): Observable<any> {
    // return this.apiService.get(`requests?orderBy=${orderBy}`);
    return this.apiService.get('sortRequests');
  }
}