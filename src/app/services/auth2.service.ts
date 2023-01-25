import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth, FacebookAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth2Service {
  provider = new FacebookAuthProvider();
  auth3 = getAuth();

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) { }

  // Sign in with Google
  googleAuth() {
    return this.authLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['/home']);
    });
  }
  // Auth logic to run auth providers
  authLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  faceAuth() {
    return this.authLogin2(new FacebookAuthProvider()).then((res: any) => {
      this.router.navigate(['/home']);
    });
  }
  // Auth logic to run auth providers
  authLogin2(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  gitAuth() {
    return this.authLogin3(new GithubAuthProvider()).then((res: any) => {
      this.router.navigate(['/home']);
    });
  }
  // Auth logic to run auth providers
  authLogin3(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        window.alert(error);
      });
  }
}
