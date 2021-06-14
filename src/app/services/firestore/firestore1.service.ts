import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Model } from 'src/app/models/model.model';

@Injectable({
  providedIn: 'root'
})
export abstract class Firestore1Service<T extends Model> {

  constructor(private af:AngularFirestore) { }
}
