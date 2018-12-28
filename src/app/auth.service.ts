import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Subject } from 'rxjs';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NotifierService } from 'angular-notifier';

interface User {
  displayName: string;
  email: string;
  photoUrl: string;
}

@Injectable()
export class AuthService {
  token: string;
  user = new Subject<User>();

  constructor(
    public afAuth: AngularFireAuth,
    private spinnerService: Ng4LoadingSpinnerService,
    private notifierService: NotifierService,
  ) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const { displayName, email, photoURL: photoUrl } = user;
        this.getToken();
        this.user.next({ displayName, email, photoUrl });
      } else {
        this.user.next(null);
      }
    });
  }

  getToken() {
    const user = firebase.auth().currentUser;
    if (user) {
      user.getIdToken()
        .then((token: string) => this.token = token);
    }

    return this.token;
  }

  isAuthenticated() {
    return !!this.token;
  }

  handleError(error) {
    this.spinnerService.hide();
    this.notifierService.show({
      message: error.message,
      type: 'error',
    });
    console.log('Auth service error:', error);
    throw error;
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    this.spinnerService.show();

    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        const { displayName, email, photoURL: photoUrl } = res.user;

        this.spinnerService.hide();
        this.user.next({ displayName, email, photoUrl });

        firebase.auth().currentUser.getIdToken()
          .then((token: string) => this.token = token);

        return res;
      })
      .catch(this.handleError.bind(this));
  }

  signIn(data: { email: string, password: string }) {
    this.spinnerService.show();

    return firebase.auth().signInWithEmailAndPassword(data.email, data.password)
      .then(res => {
        const { displayName, email, photoURL: photoUrl } = res.user;

        this.spinnerService.hide();
        this.user.next({ displayName, email, photoUrl });

        firebase.auth().currentUser.getIdToken()
          .then((token: string) => this.token = token);

        return res;
      })
      .catch(this.handleError.bind(this));
  }

  signUp(data: { email: string, password: string }) {
    return firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .catch(this.handleError.bind(this));
  }

  logout() {
    this.token = null;
    this.user.next(null);
    return this.afAuth.auth.signOut();
  }
}
