import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FotografiasService } from '../../services/fotografias.service'
import { AuthService } from '../../services/auth.service';
import { UploadService } from '../../services/upload.service';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'app-editar-fotografia',
  templateUrl: './editar-fotografia.component.html',
  styleUrl: './editar-fotografia.component.css'
})
export class EditarFotografiaComponent implements OnInit {
  public fotografia:any={};
  public image_selected:string = '';
  public filesToUload: Array<File>;
  public token;
  public url: string;

  constructor(
    private _route: ActivatedRoute,
    private _fotografiaService: FotografiasService,
    private _auth: AuthService,
    private _upload: UploadService,
    private _router: Router

  ) { 
    this.token = this._auth.getToken();
    this.filesToUload = Array<File>();
    this.url = GLOBAL.url;
  }

  ngOnInit(){
    this.getFotografia();
  }

  getFotografia(){
    this._route.params.forEach((params) => {
      this._fotografiaService.getFotografiasById(params['id'])
      .then(res => {
        this.fotografia = res.fotografia;
        this.image_selected = res.fotografia.imagen;
      })
      .catch(err => {
        console.log(err);
      });
    });
  }

  editar(){
    if(this.token == null){
      console.log('No hay token');
      return;
    }
    this._fotografiaService.update(this.fotografia.id, this.fotografia, this.token)
    .then(response => {
      console.log(response);
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
