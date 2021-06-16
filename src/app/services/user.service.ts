import { Inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Model } from '../models/model.model';
import { profesorData, profesorDatafirestore } from '../models/user-data.model';
import { Firestore2Service } from './firestore/firestore2.service';
import { LoggerService } from './logger.service';
import { COLLECTION_NAME, MigratorService, USER_MIGRATOR_TOKEN } from './migrator.service';

@Injectable({
  providedIn: 'root'
})
export abstract class UserService extends Firestore2Service<profesorDatafirestore>{
  collectionName: COLLECTION_NAME = 'users';

    protected constructor(
        protected readonly af: AngularFirestore,
        @Inject(USER_MIGRATOR_TOKEN) protected readonly migrator: MigratorService<profesorDatafirestore>,
        protected logger: LoggerService
    ) {
        super(af, migrator, logger);
    }
}


