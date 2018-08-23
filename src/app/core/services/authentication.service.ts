import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
    //MOCK authentication service
    public getToken(): any {
        return 'KERMIT COBELEAD';
    }
    public setToken() {
        document.cookie = 'userId=KERMIT COBELEAD';
        return null;
    }
    public clearToken() {
        document.cookie = '';
    }
}