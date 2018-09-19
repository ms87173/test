import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { environment } from '../../../environments/environment.dev';

@Injectable()
export class UserInfoService {
  constructor(private http: HttpClient, private apiService: ApiService) { }
  getUserInfo(): Observable<any> {
    return of({});
  }
  getUserContactPerson(): Observable<any> {
    return this.apiService.get(environment.apiUrls.fetchContactPerson);
  }
}
