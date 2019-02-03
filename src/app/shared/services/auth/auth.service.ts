import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import User from '../../interfaces/user.interface';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private dataService: DataService<User>) {

    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.dataService.getItem$(`users/${user.uid}`);
        } else {
          return of(null);
        }
      })
    );
  }

  async login(): Promise<boolean> {
    try {
      const provider = new auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      await this.updateUserData(credential.user);
      return this.router.navigate(['/timer']);
    } catch (error) {}
  }

  async logout(): Promise<void> {
    await this.router.navigate(['/']);
    return this.afAuth.auth.signOut();
  }

  private updateUserData(user: User): Promise<void> {
    const userData: User = {
      uid: user.uid,
      displayName: user.displayName ? user.displayName : 'Hello'
    };

    return this.dataService.updateItem(`users/${user.uid}`, userData);
  }
}
