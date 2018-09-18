import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
    // MOCK authentication service
    public getToken(): any {
        return 'CPB CLIENT';
    }
    public setToken() {
        document.cookie = 'userId=CPB CLIENT';
        return null;
    }
    public clearToken() {
        document.cookie = '';
    }
}
