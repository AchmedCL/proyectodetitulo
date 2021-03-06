import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import auth from '../../../../node_modules/firebase'
import firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;
import { first } from 'rxjs/operators';
import { profesorData, profesorDatafirestore } from 'src/app/models/user-data.model';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  
  constructor( private afAuth: AngularFireAuth, 
    private router: Router, 
    private afs: AngularFirestore,
    private userService: UserService,
    ) {
    this.user$ = afAuth.authState;
  }
  profesorDatos: profesorDatafirestore | undefined;

  user$: Observable<auth.User | null>;
  login(email: string, password: string)
  {
    this.afAuth.signInWithEmailAndPassword(email,password)
    .then(values => {
      console.log('log in succesfull');
      this.router.navigateByUrl('/home');
    })
    .catch(err => {
      console.log('something wrong: ', err.message);
    })
  }

  async emailSignUp(email: string, password: string)/*: Promise<boolean>*/{
    //let result;
    //try {
      //result =  
      await this.afAuth.createUserWithEmailAndPassword(email, password)
      await this.router.navigate(['home']);
    /*} catch (error) {

      console.log('something wrong: ');
      return false;
    }
    if(!result.user){
      return false;
    }
    return await this.storeUserFirestore(result, data);*/
  }
 
  async getStoredUser(id: string): Promise<profesorDatafirestore | null> {
    try {
        return await this.userService.getAsPromise(id);
    } catch (e) {
        if (e instanceof Error) {
            return null;
        } else {
            throw e;
        }
    }
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
