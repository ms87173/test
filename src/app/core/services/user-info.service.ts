import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class UserInfoService {
  constructor(private http: HttpClient, private apiService: ApiService) { }
  getUserInfo(): Observable<any> {
    // TODO: Unknown Api
    // return this.apiService.get('user');
    return of({});
  }
  getUserContactPerson(): Observable<any> {
    return this.apiService.get('contact');
    /// TODO : Production Url
    // return this.apiService.get('/application/contact');
  }
}
