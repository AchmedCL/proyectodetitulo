import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registraralumno',
  templateUrl: './registraralumno.component.html',
  styleUrls: ['./registraralumno.component.css']
})
export class RegistraralumnoComponent implements OnInit {
  newAlumnoForm = new FormGroup({
    nombreAlumno: new FormControl("",Validators.required),
    apellidoAlumno: new FormControl("",Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }

  get name(): FormControl {
    return getFormControlOrThrow('name', this.newAlumnoForm);
  }

  get email(): FormControl {
    return getFormControlOrThrow('email', this.newAlumnoForm);
  }

  get password(): FormControl {
    return getFormControlOrThrow('password', this.newAlumnoForm);
  }

  get confirmPassword(): FormControl {
    return getFormControlOrThrow('confirmPassword', this.newAlumnoForm);
  }
}
function getFormControlOrThrow(arg0: string, newUserForm: any): FormControl {
  throw new Error('Function not implemented.');
}