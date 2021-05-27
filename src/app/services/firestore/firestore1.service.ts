import { Injectable } from '@angular/core';
import { Model } from 'src/app/models/model.model';

@Injectable({
  providedIn: 'root'
})
export abstract class Firestore1Service<T extends Model> {

  constructor() { }
}
