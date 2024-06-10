import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
   }

  login(usuario: any, getToken?:boolean ){
    if(getToken){
      usuario.token = getToken;
    }
    let headers = {'Content-Type':'Application/json'};
    return this._http.post(this.url + 'login', usuario, {headers: headers}).toPromise()
    .then(res => res)
    .catch(err => err);
  }

}
