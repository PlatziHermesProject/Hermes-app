import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getJwt(): string {
    if (localStorage.getItem('token')) {
        return localStorage.getItem('token');
    }
    return '';
  }

  getValueTokenKey(key?: string, jwt?: string) {

    if (!jwt) {
        jwt = this.getJwt();
    }

    const base64Url = String(jwt).split('.')[1];
    if (!base64Url) {
        return;
    }
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(atob(base64))[key];
  }

}
