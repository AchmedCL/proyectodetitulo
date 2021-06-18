import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { profesorData, profesorDatafirestore } from 'src/app/models/user-data.model';
import { AuthserviceService } from 'src/app/services/auths/authservice.service';
import { UserService } from 'src/app/services/user.service';
import { getFormControlOrThrow } from 'src/app/shared/services/form';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  newProfesorForm = new FormGroup({
    nombreProfesor: new FormControl("",Validators.required),
    apellidoProfesor: new FormControl("",Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    codigoColegio: new FormControl('', Validators.required)
  })
  profesorDatos: profesorData | undefined;
  profesorUserData: profesorDatafirestore | undefined;

  constructor(private authService: AuthserviceService, 
      private afAuth: AngularFireAuth, 
      private afs: AngularFirestore,
      private userService:UserService
    ) { }

  ngOnInit(): void {
  }
  async signUp(): Promise<boolean>{
    this.profesorDatos = {
      nombre: this.name.value,
      apellido: this.lastName.value,
      codigoColegio: this.codigoColegio.value,
      password: this.password.value
    };

    const sign = await this.authService.emailSignUp(this.email.value,this.password.value);
    const user = await this.authService.getCurrentUser()
    if(!user){
      return false;
    }
    this.profesorUserData = {
      nombre: this.profesorDatos.nombre,
      apellido: this.profesorDatos.apellido,
      codigoColegio: this.profesorDatos.codigoColegio,
      password: this.profesorDatos.password,
      id: user.uid,
      email: user.email,
      publicaciones: []
    }
    const newUser = await this.afs.collection('users').doc(user.uid).set(this.profesorUserData);
    return true;
  }

  get name(): FormControl {
    return getFormControlOrThrow('nombreProfesor', this.newProfesorForm);
  }

  get lastName(): FormControl {
    return getFormControlOrThrow('apellidoProfesor', this.newProfesorForm);
  }
  get email(): FormControl {
    return getFormControlOrThrow('email', this.newProfesorForm);
  }

  get codigoColegio(): FormControl{
    return getFormControlOrThrow('codigoColegio', this.newProfesorForm);
  }
  get password(): FormControl {
    return getFormControlOrThrow('password', this.newProfesorForm);
  }

  get confirmPassword(): FormControl {
    return getFormControlOrThrow('confirmPassword', this.newProfesorForm);
  }
}
