import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class DataService<TypeI> {

  constructor(private afs: AngularFirestore) { }

  getCollection$(collectionPath: string, orderByPropString: string): Observable<TypeI[]> {
    let collection: AngularFirestoreCollection<TypeI>;
    collection = this.afs.collection(collectionPath, ref => ref.orderBy(orderByPropString));
    return collection.valueChanges();
  }

  getItem$(itemPath: string): Observable<TypeI[]> {
    let collection: AngularFirestoreCollection<TypeI>;
    collection = this.afs.collection(itemPath, ref => ref);
    return collection.valueChanges();
  }

  postNewItem(collectionPath: string, payload: object): Promise<void> {
    // Remove '/' from end of collectionPath if there is one
    collectionPath = collectionPath[collectionPath.length - 1] === '/'
                    ? collectionPath.substr(0, collectionPath.length - 1) : collectionPath;
    const newId: string = this.afs.createId();
    const docRef: AngularFirestoreDocument<object> = this.afs.doc(`${collectionPath}/${newId}`);

    // Add newId to the object
    payload = {...payload, id: newId};

    return docRef.set(payload);
  }

  updateItem(path: string, payload: object): Promise<void> {
    const docRef: AngularFirestoreDocument<object> = this.afs.doc(path);
    const updatedItem = {...payload};

    return docRef.set(updatedItem);
  }

  deleteItem(path: string): Promise<void> {
    const docRef: AngularFirestoreDocument<TypeI> = this.afs.doc(path);
    return docRef.delete();
  }
}
