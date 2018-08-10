import { Injectable } from '@angular/core';
// import decode from 'jwt-decode';

@Injectable()
export class AuthenticationService {
    //MOCK authentication service
    public getToken(): string {
        return localStorage.getItem('token');
    }
    public setToken() {
        localStorage.setItem('token', "qwertyuiopasdfghjklzxcvbnm");
        document.cookie = 'Authorization=qwertyuiopasdfghjklzxcvbnm';
        return null;
    }
    public clearToken() {
        localStorage.setItem('token', "");
        document.cookie = '';
    }
}