import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
    token: any;
    //MOCK authentication service
    public getToken(): any {
        return this.token;
    }
    public setToken() {
        document.cookie = 'userId=KERMIT COBELEAD';
        this.token = {
            userId: 'KERMIT COBELEAD'
        };
        return null;
    }
    public clearToken() {
        this.token = null;
        document.cookie = '';
    }
}