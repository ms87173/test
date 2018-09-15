import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
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
}
