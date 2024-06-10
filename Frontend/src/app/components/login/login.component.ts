import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public usuario: any = {};

  constructor(
    private _serviceLogin: LoginService,
    private _router: Router
  ) { }

  ngOnInit(){

  }

  login(){
    this._serviceLogin.login(this.usuario)
    .then(res => {
      if(!res.usuario || !res.usuario.password){
        console.log("Usuario o contraseña incorrectos");
        return;
      }
      this._serviceLogin.login(this.usuario, true)
      .then(resToken => {
        localStorage.setItem('identity_user', JSON.stringify(res.usuario));
        localStorage.setItem('token', resToken.token);
        this._router.navigate(['/admin/list']);
      })
      .catch(err => {
        console.log(err);
      }); 
    })
    .catch(err => {
      console.log(err + "Usuario o contraseña incorrectos");
    }); 
  }

}
