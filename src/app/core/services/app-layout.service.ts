import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { ENDPOINTS } from '../../core/constants/endpoints.constants';
import { pluck, share, shareReplay, tap } from 'rxjs/operators';
// import { UserInfoRequest, IMembereEGs, IAccounts, IHoldings } from '../constants/endpoints.constants';



@Injectable({
  providedIn: 'root'
})
export class AppLayoutService {

  constructor(private http: HttpClient) { }

  getEnvDetail(): Observable<any> {
    const url = ENDPOINTS.GET_ENV;
    return  this.http.get<Response>(url);
  }

  getUserDetails(_soeId): Observable<any> {
    const url = ENDPOINTS.GET_USER;
    const params = {soeId: _soeId};
    return this.http.get<Response>(url, {params: params});
  }
}
