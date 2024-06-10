import { Component, OnInit } from '@angular/core';
import { FotografiasService } from '../../services/fotografias.service';
import { response } from 'express';
import { GLOBAL } from '../../services/global';
import { ActivatedRoute, Router } from '@angular/router';
import { Animations } from '../../animations/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [ Animations ] 
})

export class HomeComponent implements OnInit{
  public fotografias: any[] = [];
  public url: string;
  public fotografia_selected: any={};
  public ver_mas: boolean = false;
  public foto_actual: number = 0;
  public direccion: string = '';
  public show_thumbs: boolean = false;

  constructor(
    private _serviceFotografias:FotografiasService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = GLOBAL.url;
   }

  ngOnInit() {
    this.getFotografias();
  }

  getFotografias(){
    this._serviceFotografias.getFotografias()
    .then(res => {
      this.fotografias = res.fotografias;
      this._route.params.forEach(params => {
        let num = params['num'];
        this.fotografia_selected.fotografia = this.fotografias.find(result => {
          return result.numero == num;
      });
      if(!this.fotografia_selected.fotografia){
        this.fotografia_selected.fotografia = this.fotografias[0];
      }
      let next = this.fotografias.indexOf(this.fotografia_selected.fotografia) + 1;
      let prev = this.fotografias.indexOf(this.fotografia_selected.fotografia) - 1;

      this.fotografia_selected.siguiente = next < this.fotografias.length ? this.fotografias[next].numero : null;
      this.fotografia_selected.anterior = prev >= 0 ? this.fotografias[prev].numero : null;
      
      this.moverFotografia(this.fotografia_selected.fotografia);
    })
    .catch(error => {
      console.log(error);
    })
    });
  }

  moverFotografia(fotografia:any){
    this.show_thumbs = false;
    if(fotografia.numero > this.foto_actual){
      this.direccion = 'right';
    }else if(fotografia.numero < this.foto_actual){
      this.direccion = 'left';
    } 
    this.foto_actual=fotografia.numero;

    this._router.navigate(['/home', this.foto_actual]);
  }
  
}