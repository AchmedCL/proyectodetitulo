import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Publicaciones } from 'src/app/models/publicaciones.model';
import { AuthserviceService } from 'src/app/services/auths/authservice.service';
import { getFormControlOrThrow } from 'src/app/shared/services/form';
import firebase from 'firebase';
import * as firebases from 'firebase/app';
import { User } from 'src/app/shared/services/user';
import { AngularFireAuth } from '@angular/fire/auth';
import auth from '../../../../node_modules/firebase'


@Component({
  selector: 'app-inicio-home',
  templateUrl: './inicio-home.component.html',
  styleUrls: ['./inicio-home.component.css']
})
export class InicioHomeComponent implements OnInit {

  constructor(private afs: AngularFirestore, private authService: AuthserviceService, private afauth: AngularFireAuth) { 
   }

  nuevaPublicacion = new FormGroup({
    titulo: new FormControl('', Validators.required),
    cuerpoTexto: new FormControl('',Validators.required),
  });
  publicacion: Publicaciones | undefined;
  async ngOnInit(): Promise<void> {

  }

  async crearNuevaPublicacion(): Promise<boolean>{
    this.publicacion = {
      titulo: this.titulo.value,
      cuerpo: this.texto.value,
    };
    console.log(this.publicacion);
    const user = await this.authService.getCurrentUser();
    if(!user){
      return false;
    }
    const pub = await this.afs.collection('users').doc(user.uid).collection('publicaciones').doc()
    console.log(pub);
    // if(!pub){
    //   return false;
    // }
    
    
    
    //const userUpdated = await this.afs.collection('users').doc(user.uid).update({publicaciones: firebase.firestore.FieldValue.arrayUnion(pub.id)});
    return true;
  }
  // async getuserCurrent(): Promise<User | null>{
  //   //return const user = await this.authService.getCurrentUser();
  // }
  get titulo(): FormControl{
    return getFormControlOrThrow('titulo', this.nuevaPublicacion);
  }
  get texto(): FormControl{
    return getFormControlOrThrow('cuerpoTexto', this.nuevaPublicacion);
  }
}
