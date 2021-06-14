import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  
  constructor(private authService: AuthserviceService, private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }
  async signUp(){
    const sign = await this.authService.emailSignUp(this.email.value,this.password.value);
  }

  get name(): FormControl {
    return getFormControlOrThrow('name', this.newProfesorForm);
  }

  get email(): FormControl {
    return getFormControlOrThrow('email', this.newProfesorForm);
  }

  get password(): FormControl {
    return getFormControlOrThrow('password', this.newProfesorForm);
  }

  get confirmPassword(): FormControl {
    return getFormControlOrThrow('confirmPassword', this.newProfesorForm);
  }
}
