import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export abstract class DataService<TypeI> {

  constructor(private afDatabase: AngularFireDatabase) { }

  getCollection$(collectionPath: string): Observable<TypeI[]> {
    let collection: AngularFireList<TypeI>;
    collection = this.afDatabase.list(collectionPath, ref => ref);
    return collection.valueChanges();
  }

  getItem$(itemPath: string): Observable<TypeI> {
    const docRef: AngularFireObject<TypeI> = this.afDatabase.object(itemPath);
    return docRef.valueChanges();
  }

  postNewItem(collectionPath: string, payload: object): Promise<string> {
    // Remove '/' from end of collectionPath if there is one
    collectionPath = collectionPath[collectionPath.length - 1] === '/'
                    ? collectionPath.substr(0, collectionPath.length - 1) : collectionPath;
    const newId: string = this.afDatabase.createPushId();
    const docRef: AngularFireObject<object> = this.afDatabase.object(`${collectionPath}/${newId}`);

    // Add newId to the object
    payload = {...payload, id: newId};

    return docRef.set(payload).then(() => newId);
  }

  updateItem(path: string, payload: object): Promise<void> {
    const docRef: AngularFireObject<TypeI> = this.afDatabase.object(path);
    const updatedItem = {...payload};

    return docRef.set(updatedItem as TypeI);
  }

  deleteItem(path: string): Promise<void> {
    const docRef: AngularFireObject<TypeI> = this.afDatabase.object(path);
    return docRef.remove();
  }

  createId() {
    return this.afDatabase.createPushId();
  }
}
