import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  newProfesorForm = new FormGroup({
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
function getFormControlOrThrow(arg0: string, newUserForm: any): FormControl {
  throw new Error('Function not implemented.');
}

