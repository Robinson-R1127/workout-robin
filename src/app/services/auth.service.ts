import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { auth, User } from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  afUser$: Observable<User> = this.afAuth.user;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.afUser$.subscribe(user => console.log(user));
  }

  createUser(params: { email: string; password: string }) {
    this.afAuth
      .createUserWithEmailAndPassword(params.email, params.password)
      .then(result => {
        result.user.sendEmailVerification();
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert('This email address is already registered');
            break;
          case 'auth/invalid-email':
            alert('The email address is incorrect');
            break;
        }
      });
  }

  login(params: { email: string; password: string }) {
    this.afAuth
      .signInWithEmailAndPassword(params.email, params.password)
      .catch(error => {
        switch (error.code) {
          case 'auth/user-not-found':
            alert('No user found for this email address');
            break;
          case 'auth/wrong-password':
            alert('your password is incorrect');
            break;
          case 'auth/invalid-email':
            alert('The email address is incorrect');
            break;
        }
      });
  }

  signInWithGoogle() {
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider()).then(() => {
      this.snackBar.open('Logged in successfully', null, {
        duration: 2000
      });
    });
    this.router.navigateByUrl('/');
  }

  signInWithFacebook() {
    this.afAuth.signInWithPopup(new auth.FacebookAuthProvider()).then(() => {
      this.snackBar.open('Logged in successfully', null, {
        duration: 2000
      });
    });
    this.router.navigateByUrl('/');
  }

  logout() {
    // ログアウト処理
    this.afAuth.signOut().then(() => {
      this.snackBar.open('Logged out', null, {
        duration: 2000
      });
    });
    // ログアウトした時にどこのページに飛ばすか記述
    this.router.navigateByUrl('/login');
  }
}
