import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio-home',
  templateUrl: './inicio-home.component.html',
  styleUrls: ['./inicio-home.component.css']
})
export class InicioHomeComponent implements OnInit {

  constructor() { }
  nuevaPublicacion = new FormGroup({
    titulo: new FormControl('', Validators.required),
    cuerpoTexto: new FormControl('',Validators.required),
  });
  ngOnInit(): void {
  }

  
}
