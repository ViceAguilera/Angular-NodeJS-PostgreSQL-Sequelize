import { Component, OnInit } from '@angular/core';
import { FotografiasService } from '../../services/fotografias.service';
import { AuthService } from '../../services/auth.service';
import { GLOBAL } from '../../services/global';
import { Animations } from '../../animations/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  animations: [ Animations ] 
})
export class ListComponent implements OnInit{
  public token;
  public fotografias: any[] = [];
  public url: string;

  constructor( 
    private _serviceFografia: FotografiasService,
    private _auth: AuthService
  ) { 
    this.token = this._auth.getToken();
    this.url = GLOBAL.url;
  }

  ngOnInit(){
    this.getFotografias();
  }

  getFotografias(){
    if(this.token == null){
      console.log('No hay token');
      return;
    }
    this._serviceFografia.getFotografiasAdmin(this.token)
    .then(res => {
      this.fotografias = res.fotografias;
      console.log(this.fotografias);
    })
    .catch(err => {
      console.log(err);
    });
  }
}
