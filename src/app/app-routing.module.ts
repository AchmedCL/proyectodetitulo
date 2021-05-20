import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistraralumnoComponent } from './views/alumno/registraralumno/registraralumno.component';
import { InicioSesionComponent } from './views/inicio-sesion/inicio-sesion.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
