import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistraralumnoComponent } from './views/alumno/registraralumno/registraralumno.component';
import { InicioHomeComponent } from './views/inicio-home/inicio-home.component';
import { InicioSesionComponent } from './views/inicio-sesion/inicio-sesion.component';
import { GruposComponent } from './views/profesor/grupos/grupos.component';
import { PerfilComponent } from './views/profesor/perfil/perfil.component';
import { RegistroComponent } from './views/profesor/registro/registro.component';

const routes: Routes = [
  {
    path: 'registroAlumno',
    component: RegistraralumnoComponent,
  },
  {
    path: 'registroProfesor',
    component: RegistroComponent,
  },
  {
    path: 'inicioSesion',
    component: InicioSesionComponent,
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  },
  {
    path: 'grupos',
    component: GruposComponent,
  },
  {
    path: 'home',
    component: InicioHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
