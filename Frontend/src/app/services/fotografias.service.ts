import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FotografiasService {
  private url: string;
  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
   }

  getFotografiasById(id: number){
    return this._http.get(this.url + 'fotografia/' + id)
    .toPromise()
    .then(res => res)
    .catch(err => err);
  }

  getFotografias(){
    return this._http.get(this.url + 'fotografias')
    .toPromise()
    .then(res => res)
    .catch(err => err);
  }

  getFotografiasAdmin(token: string){
    let headers = {'Authorization': token};
    return this._http.get(this.url + 'fotografias-admin', {headers: headers})
    .toPromise()
    .then(res => res)
    .catch(err => err);
  }

  save(fotografia: any, token: string){
    let headers = {'Authorization': token};
    return this._http.post(this.url + 'fotografia', fotografia, {headers: headers})
    .toPromise()
    .then(res => res)
    .catch(err => err);
  }

  update(id: number, fotografia: any, token: string){
    let headers = {'Authorization': token};
    return this._http.put(this.url + 'fotografia/' + id, fotografia, {headers: headers})
    .toPromise()
    .then(res => res)
    .catch(err => err);
  }

}
