import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import auth from '../../../../node_modules/firebase'
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  
  constructor( private afAuth: AngularFireAuth, private router: Router) {
    this.user$ = afAuth.authState;
  }
  
  user$: Observable<auth.User | null>;
  login(email: string, password: string)
  {
    this.afAuth.signInWithEmailAndPassword(email,password)
    .then(values => {
      console.log('log in succesfull');
      this.router.navigateByUrl('/perfil');
    })
    .catch(err => {
      console.log('something wrong: ', err.message);
    })
  }

  emailSignUp(email: string, password: string){
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Success',value);
      this.router.navigateByUrl('/perfil')
    })
    .catch(err => {
      console.log('something wrong: ', err.message);
    })
  }

  logout(){
    this.afAuth.signOut().then(() =>{
      this.router.navigate(['/inicioSesion']);
    })
  }

  async getCurrentUser(): Promise<auth.User | null> {
    return await this.user$.pipe(first()).toPromise();
  }
}
