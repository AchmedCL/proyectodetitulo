import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Model } from 'src/app/models/model.model';

@Injectable({
  providedIn: 'root'
})
export abstract class Firestore1Service<T extends Model> {

  constructor(private af:AngularFirestore) { }

  protected getFirestoreDocument(...paths: string[]): AngularFirestoreDocument<T>{
    if(paths.length % 2 === 1){
      throw new Error('Document reference must have an even number of paths')
    }
    return this.af.doc<T>(paths.join('/'));
  }

  
}
