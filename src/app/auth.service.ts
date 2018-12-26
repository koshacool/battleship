import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Subject } from 'rxjs';

interface User {
  displayName: string;
  email: string;
  photoUrl: string;
}

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  token: string;
  user = new Subject<User>();

  constructor(public afAuth: AngularFireAuth) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const { displayName, email, photoURL: photoUrl } = user;
        this.user.next({ displayName, email, photoUrl });
        this.isLoggedIn = true;
      } else {
        this.user.next(null);
        this.isLoggedIn = false;
      }
    });

    if (!this.token) {
      this.getToken();
    }
  }

  getToken() {
    const user = firebase.auth().currentUser;
    user && user.getIdToken()
      .then((token: string) => this.token = token);

    return this.token;
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }

  googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');

      return this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        this.isLoggedIn = true;
        firebase.auth().currentUser.getIdToken()
          .then((token: string) => this.token = token);

        return res;
      });
  }

  signIn(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
      firebase.auth().currentUser.getIdToken()
        .then((token: string) => this.token = token);

      return res;
    });
}

  signUp(email: string, password: string) {
      return firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error));
  }

  logout() {
    return this.afAuth.auth.signOut();
    this.token = '';
    this.isLoggedIn = false;
  }
}
