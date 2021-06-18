import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getFormControlOrThrow } from 'src/app/shared/services/form';

@Component({
  selector: 'app-registraralumno',
  templateUrl: './registraralumno.component.html',
  styleUrls: ['./registraralumno.component.css']
})
export class RegistraralumnoComponent implements OnInit {
  newAlumnoForm = new FormGroup({
    nombreAlumno: new FormControl("",Validators.required),
    apellidoAlumno: new FormControl("",Validators.required),
    usuario: new FormControl('', Validators.required),
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
    return getFormControlOrThrow('usuario', this.newAlumnoForm);
  }

  get password(): FormControl {
    return getFormControlOrThrow('password', this.newAlumnoForm);
  }

  get confirmPassword(): FormControl {
    return getFormControlOrThrow('confirmPassword', this.newAlumnoForm);
  }
}
