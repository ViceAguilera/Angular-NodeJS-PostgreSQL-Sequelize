import { Component, HostBinding, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Animations } from '../../animations/animations';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  animations: [ Animations ] 

})
export class AdminComponent implements OnInit {
  public identity: any;
  @HostBinding('@anim-admin') animAdmin = true;

  constructor(
    private _auth: AuthService,
    private _router: Router
  ) {
    this.identity = this._auth.getIdentity();
   }

  ngOnInit() {
  }

  logout(){
    this._auth.logOut();
    this._router.navigate(['/login']);
  }

}
