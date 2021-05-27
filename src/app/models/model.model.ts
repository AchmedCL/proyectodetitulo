import firebase from 'firebase';
import FieldValue = firebase.firestore.FieldValue;

export class Model {
  _docId?: string;
  _creationTime?: number | FieldValue;
  _lastUpdate?: number | FieldValue;
  _databaseVersion?: number;
}
