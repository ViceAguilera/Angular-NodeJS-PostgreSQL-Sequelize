import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ListComponent } from './components/list/list.component';
import { GuardService } from './services/guard.service';
import { NuevaFotografiaComponent } from './components/nueva-fotografia/nueva-fotografia.component';
import { EditarFotografiaComponent } from './components/editar-fotografia/editar-fotografia.component';

const routes: Routes = [
  { path: 'home/:num', component: HomeComponent }, 
  { path: 'admin', component: AdminComponent,  canActivate: [GuardService],
        children: [
          { path: 'list', component: ListComponent },
          { path: 'new', component: NuevaFotografiaComponent },
          { path: 'edit/:id', component: EditarFotografiaComponent }
        ]
    },
  { path: 'login', component: LoginComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home/1' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
