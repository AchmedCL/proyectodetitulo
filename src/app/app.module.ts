import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './views/profesor/registro/registro.component';
import { RegistraralumnoComponent } from './views/alumno/registraralumno/registraralumno.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioSesionComponent } from './views/inicio-sesion/inicio-sesion.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { PerfilComponent } from './views/profesor/perfil/perfil.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthserviceService } from './services/auths/authservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatCardModule} from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import { GruposComponent } from './views/profesor/grupos/grupos.component';
import { InicioHomeComponent } from './views/inicio-home/inicio-home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    RegistraralumnoComponent,
    NavbarComponent,
    InicioSesionComponent,
    PerfilComponent,
    ToolbarComponent,
    GruposComponent,
    InicioHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
