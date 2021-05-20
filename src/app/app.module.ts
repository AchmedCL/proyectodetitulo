import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './views/profesor/registro/registro.component';
import { RegistraralumnoComponent } from './views/alumno/registraralumno/registraralumno.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioSesionComponent } from './views/inicio-sesion/inicio-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    RegistraralumnoComponent,
    NavbarComponent,
    InicioSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
