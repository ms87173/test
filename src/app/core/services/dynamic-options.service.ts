import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class ApplicationsService {
  constructor(private apiService: ApiService) { }
  getDynamicOptions(param: string): Observable<any[]> {
    //TODO: need to implement against a param value
    console.log(param);
    return this.apiService.get('static-options');
  }
}