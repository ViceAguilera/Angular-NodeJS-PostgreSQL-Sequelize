import { Component, OnInit } from '@angular/core';
import { FotografiasService } from '../../services/fotografias.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UploadService } from '../../services/upload.service';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'app-nueva-fotografia',
  templateUrl: './nueva-fotografia.component.html',
  styleUrl: './nueva-fotografia.component.css'
})
export class NuevaFotografiaComponent implements OnInit{
  public fotografia: any={};
  public token;
  public filesToUload: Array<File>;
  public image_selected: string;
  public url: string;

  constructor(
    private _fotografiasService: FotografiasService,
    private _auth: AuthService,
    private _upload: UploadService,
    private _router: Router

  ) {
    this.token = this._auth.getToken();
    this.url = GLOBAL.url;
    this.image_selected = '';
    this.filesToUload = Array<File>();
   }

  ngOnInit(){

  }

  agregar(){
    if(this.token == null){
      console.log('No hay token');
      return;
    }
    this.fotografia.usuario_creacion=this._auth.getIdentity().usuario_creacion;
    this._fotografiasService.save(this.fotografia, this.token)
    .then(response => {
      if(this.token == null){
        console.log('No hay token');
        return;
      }
      if(this.filesToUload){
        this._upload.upload(this.url + 'upload-fotografia/' + response.fotografia.id, this.filesToUload , this.token)
        .then(fotografias => {
          this._router.navigate(['/admin/list']);
        })
        .catch(error => {
          this._router.navigate(['/admin/list']);
          console.log(error);
        });
      }
    })  
    .catch(error => {
      console.log(error);
    });
  }
  
  fileChangeEvent(fileInput: any){
    this.filesToUload = fileInput.target.files.length > 0 ? <Array<File>>fileInput.target.files : [];
    this.image_selected = this.filesToUload ? fileInput.target.files[0].name : '';

  }

}
