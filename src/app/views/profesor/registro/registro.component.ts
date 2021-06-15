import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { profesorData } from 'src/app/models/user-data.model';
import { AuthserviceService } from 'src/app/services/auths/authservice.service';
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
  constructor(private authService: AuthserviceService, private afAuth: AngularFireAuth, private afs: AngularFirestore) { }

  ngOnInit(): void {
  }
  async signUp(){
    this.profesorDatos={
      email: this.email.value,
      nombre: this.name.value,
      password: this.password.value,
      apellido: this.apellido.value,
      codigoColegio: this.codigoColegio.value
    }
    this.afs.collection('users').add(this.profesorDatos);
    const sign = await this.authService.emailSignUp(this.email.value,this.password.value);
  }

  get name(): FormControl {
    return getFormControlOrThrow('nombreProfesor', this.newProfesorForm);
  }

  get apellido(): FormControl {
    return getFormControlOrThrow('apellido', this.newProfesorForm);
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
