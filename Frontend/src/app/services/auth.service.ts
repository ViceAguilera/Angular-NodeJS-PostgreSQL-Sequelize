import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  getIdentity() {
    if (this.isBrowser()) {
      let identity = localStorage.getItem('identity_user');
      if (identity && identity != "undefined") {
        return JSON.parse(identity);
      }
    }
    return null;
  }

  getToken() {
    if (this.isBrowser()) {
      let token = localStorage.getItem('token');
      if (token && token != "undefined") {
        return token;
      }
    }
    return null;
  }

  isLoggedIn(): boolean {
    return this.getIdentity() !== null && this.getToken() !== null;
  }

  logOut() {
    if (this.isBrowser()) {
      localStorage.removeItem('identity_user');
      localStorage.clear();
    }
  }
}
