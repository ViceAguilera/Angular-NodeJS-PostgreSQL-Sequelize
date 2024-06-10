import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration,  } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { AdminComponent } from './components/admin/admin.component';
import { ListComponent } from './components/list/list.component';
import { NuevaFotografiaComponent } from './components/nueva-fotografia/nueva-fotografia.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EditarFotografiaComponent } from './components/editar-fotografia/editar-fotografia.component';
import { FotografiaComponent } from './components/fotografia/fotografia.component';

const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
];
const modules2 = [
  MatCheckboxModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    ListComponent,
    NuevaFotografiaComponent,
    EditarFotografiaComponent,
    FotografiaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    ReactiveFormsModule,
    ...modules,
    ...modules2
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
