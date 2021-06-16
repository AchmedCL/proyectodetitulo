import { Injectable, InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Model } from '../models/model.model';

export type TransformerMap<T> = Record<number, (source: any) => T>;
export type COLLECTION_NAME = 'users' | 'publicaciones' | 'grupos';
export const DB_VERSION = 1;
export const USER_MIGRATOR_TOKEN = migratorTokenFactory('users', {});

export function migratorTokenFactory<T extends Model>(
  name: COLLECTION_NAME,
  transformers: TransformerMap<T>
): InjectionToken<MigratorService<T>> {
  return new InjectionToken<MigratorService<T>>(name, {
      factory: () => new MigratorService<T>(DB_VERSION, transformers),
      providedIn: 'any'
  });
}

export class MigratorService<TD extends Model> {
  public migrate<TS>(source: TS): TD | null {
    try{
      return this.migrateSafe(source);
    } catch(e){
        return null;
    }
  }

  public migrateSafe<TS extends Model>(source: TS, defaultVersion: number = 0): TD {
    const docVersion = source._databaseVersion ?? defaultVersion;
    const currentVersion = this.currentVersion;

    let doc: Model = {...source};
    for (let version = docVersion; version < currentVersion; version++) {
      const transformer = this.transformers[version] ?? ((_) => _);
      doc = transformer(doc);
    }
    doc._databaseVersion = currentVersion;
    doc._docId = source._docId;
    doc._lastUpdate = source._lastUpdate;
    doc._creationTime = source._creationTime;

    if (!environment.production && this.currentVersion !== docVersion){
      console.log(`[MIGRATION] Document with id: ${source._docId} from version ${docVersion} to ${currentVersion}`);
    }

    return doc as TD;
  }
  private migrateMany(source: Model[]): TD[] {
    return source.map((s) => this.migrate(s)).filter(a => !!a) as TD[];
}



  constructor(
    public readonly currentVersion: number,
    public readonly transformers: TransformerMap<TD>,
    public readonly validator?: any // TODO: JSON Schema to validate converted model,
  ) { 

  }
}
