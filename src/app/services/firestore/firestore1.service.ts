import { Injectable } from '@angular/core';
import { 
  AngularFirestore, 
  AngularFirestoreCollection, 
  AngularFirestoreDocument, DocumentReference, QueryFn } from '@angular/fire/firestore';
import { Model } from 'src/app/models/model.model';
import firebase from 'firebase';
import FieldValue = firebase.firestore.FieldValue;
import { LoggerService } from '../logger.service';
import { MigratorService } from '../migrator.service';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class Firestore1Service<T extends Model> {

  constructor(protected af:AngularFirestore, protected migrator: MigratorService<T>, protected logger: LoggerService) { }

  protected getFirestoreDocument(...paths: string[]): AngularFirestoreDocument<T>{
    if(paths.length % 2 === 1){
      throw new Error('Document reference must have an even number of paths')
    }
    return this.af.doc<T>(paths.join('/'));
  }
  protected getFirestoreCollectionQuery(queryFn?: QueryFn, ...paths: string[]): AngularFirestoreCollection<Model> {
    if (paths.length % 2 === 0) {
        throw new Error('Document reference must have an odd number of paths');
    }
    return this.af.collection<T>(paths.join('/'), queryFn);
  }
  protected getFirestoreCollection(...paths: string[]): AngularFirestoreCollection<Model> {
    return this.getFirestoreCollectionQuery(undefined, ...paths);
  }
  protected getDocumentAsPromise(...paths: string[]): Promise<T> {
    this.logger.logAt('DB', 'get', paths);
    return this.getDocument(...paths).pipe(take(1), map((s) => this.migrator.migrateSafe(s))).toPromise()
        .catch(e => {
            this.logger.errorStandard('DB', 'query-promise', paths);
            throw e;
        });
  }
  protected getDocument(...paths: string[]): Observable<T> {
    this.logger.logAt('DB', 'get', paths);
    const doc = this.getFirestoreDocument(...paths);
    return doc.snapshotChanges()
        .pipe(map(snap => {
            if (!snap.payload.exists) {
                throw new Error();
            }
            const data = snap.payload.data();
            data._docId = doc.ref.id;
            return this.migrator.migrateSafe(data);
        }), this.logger.errorOp('DB', 'get', paths));
  }

  protected createDocument(data: T, id?:string, ...collectionPath: string[]): Promise<DocumentReference<T>> {
    this.logger.logAt('DB', 'create',[...collectionPath, id]);
    data = {...data};
    data._creationTime = FieldValue.serverTimestamp();
    data._lastUpdate = FieldValue.serverTimestamp();
    data._databaseVersion = this.migrator.currentVersion;
    delete data._docId;
    if (id){
      const doc = this.getFirestoreDocument(...collectionPath, id);
      return doc.set(data,{merge: false}).then(() => doc.ref as DocumentReference<T>)
        .catch(e => {
          this.logger.errorStandard('DB','create-merge', [...collectionPath,id]);
          throw e;
        });
    }else {
        return this.getFirestoreCollection(...collectionPath).add(data).then(doc => doc as DocumentReference<T>)
          .catch(e => {
            this.logger.errorStandard('DB', 'create-merge', [...collectionPath,id]);
            throw e;
          })
    }
  }
  protected createDocumentMerge(data: T, id?: string, ...collectionPath: string[]): Promise<DocumentReference<T>> {
    this.logger.logAt('DB', 'create-merge', collectionPath, id);
    data = {...data};
    data._creationTime = FieldValue.serverTimestamp();
    data._lastUpdate = FieldValue.serverTimestamp();
    data._databaseVersion = this.migrator.currentVersion;
    delete data._docId;
    if (id) {
        const doc = this.getFirestoreDocument(...collectionPath, id);
        return doc.set(data, {merge: true}).then(() => doc.ref as DocumentReference<T>)
            .catch(e => {
                this.logger.errorStandard('DB', 'create-merge', [...collectionPath, id]);
                throw e;
            });
    } else {
        return this.getFirestoreCollection(...collectionPath).add(data).then(doc => doc as DocumentReference<T>)
            .catch(e => {
                this.logger.errorStandard('DB', 'create-merge', [...collectionPath, id]);
                throw e;
            });
    }
}
}
