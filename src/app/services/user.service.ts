import { Injectable } from '@angular/core';
import { Model } from '../models/model.model';

@Injectable({
  providedIn: 'root'
})
export abstract class UserService<T extends Model> {
  collectionName= 'users';

  constructor() { 
    
  }
}
