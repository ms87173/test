import { SharedService } from './shared.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ENDPOINTS } from '../constants/endpoints.constants';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient, private sharedService: SharedService) { }
    // MOCK authentication service
    public getToken(): any {
        return 'KERMIT COBLEAD';
    }
    public setToken() {
        document.cookie = 'userId=KERMIT COBLEAD';
        return null;
    }
    public clearToken() {
        document.cookie = '';
    }

    // inview authentication
    getAuthToken(_env): Observable<any> {
        const url = ENDPOINTS.GET_TOKEN;
        let data = {};
        if (_env === 'local') {
          data = {username: this.sharedService.userRequest.soeId};
        } else if (_env === 'external') {
          data = {username: this.sharedService.userRequest.soeId, roleName: this.sharedService.userRequest.userRole};
        }
        return this.http.post<Response>(url, data);
      }

      getEnvToken(): string {
        return this.sharedService.appToken !== undefined ? this.sharedService.appToken : '';
      }
}
