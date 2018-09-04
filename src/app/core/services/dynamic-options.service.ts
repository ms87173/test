import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable() export class DynamicOptionsService {
  constructor(private apiService: ApiService) { }
  getDynamicOptions(param: string): Observable<any[]> {
    //TODO: need to implement against a param value
    return this.apiService.get('static-options');
  }
}