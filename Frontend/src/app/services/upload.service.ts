import { Injectable, OnInit } from '@angular/core';
import { resolve } from 'path';

@Injectable({
  providedIn: 'root'
})
export class UploadService implements OnInit{

  constructor() { }

  ngOnInit(){

  }

  upload(url: string, files: Array<File>, token:string){
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      for (var i = 0; i < files.length; i++) {
        formData.append('foto', files[i], files[i].name);
      }
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Authorization', token);
      xhr.send(formData);

      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
          if(xhr.status == 200){
            resolve(JSON.parse(xhr.response));
          }else{
            reject(xhr.response);
          }
        }
      }
  })
  }
}
