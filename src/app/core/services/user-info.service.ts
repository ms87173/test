import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class UserInfoService {
  constructor(private http: HttpClient, private apiService: ApiService) { }
  getUserInfo(): Observable<any> {
    return this.apiService.get("user");
  }
  getUserContactPerson(): Observable<any> {
    return this.apiService.get("contact");
  }
}