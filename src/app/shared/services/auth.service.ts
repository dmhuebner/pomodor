import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import User from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {

    // TODO this should probably be in ngOnInit
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async login() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  async logout() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  private updateUserData({ uid, displayName, tasks }: User | any) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument = this.afs.doc(`users/${uid}`);

    const data: User = {
      uid,
      displayName,
      tasks
    };

    userRef.set(data, { merge: true });
  }
}
