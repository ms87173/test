import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class DynamicOptionsService {
  constructor(private apiService: ApiService) { }
  getDynamicOptions(param: string): Observable<any[]> {
    const url = environment.apiUrls.fetchDynamicOptions;
    // TODO: Production Url
    // return this.apiService.get(`${url}${param}`);
    return this.apiService.get(url);
  }
}
