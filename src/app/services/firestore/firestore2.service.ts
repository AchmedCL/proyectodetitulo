import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Model } from 'src/app/models/model.model';
import { LoggerService } from '../logger.service';
import { COLLECTION_NAME, MigratorService } from '../migrator.service';
import { Firestore1Service } from './firestore1.service';

@Injectable({
  providedIn: 'root'
})
export abstract class Firestore2Service<M extends Model> extends Firestore1Service<M> {
  protected abstract readonly collectionName: COLLECTION_NAME;


  protected constructor(
    protected readonly af: AngularFirestore,
    protected readonly migrator: MigratorService<M>,
    protected readonly logger: LoggerService
  ) { 
    super(af, migrator, logger);
  }

  public create(data: M, id?: string, merge = false): Promise<DocumentReference<M>> {
    return merge ?
        this.createDocumentMerge(data, id, this.collectionName)
        : this.createDocument(data, id, this.collectionName);
  }
  
  public getAsPromise(id: string): Promise<M> {
    return this.getDocumentAsPromise(this.collectionName, id);
  }
}
