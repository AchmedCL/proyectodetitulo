import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from 'src/app/services/auths/authservice.service';
import {getFormControlOrThrow} from '../../shared/services/form';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  inicioSesionForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
  })
  constructor( private authService:AuthserviceService) { }

  ngOnInit(): void {
  }
  async signIn(): Promise<void>{
    this.authService.login(this.email.value , this.password.value);
  }


  get email(): FormControl {
    return getFormControlOrThrow('email', this.inicioSesionForm);
  }
  get password(): FormControl {
    return getFormControlOrThrow('password', this.inicioSesionForm);
  }
}
