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
    console.log(this.user)
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
        const { displayName, email, photoURL: photoUrl } = res.user;

        this.user.next({ displayName, email, photoUrl });
        this.isLoggedIn = true;
        firebase.auth().currentUser.getIdToken()
          .then((token: string) => this.token = token);

        return res;
      });
  }

  signIn(data: { email: string, password: string }) {
    return firebase.auth().signInWithEmailAndPassword(data.email, data.password)
    .then(res => {
      firebase.auth().currentUser.getIdToken()
        .then((token: string) => this.token = token);

      return res;
    });
}

  signUp(data: { email: string, password: string }) {
      return firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      // .catch(error => console.log(error));
  }

  logout() {
    this.token = '';
    this.isLoggedIn = false;
    return this.afAuth.auth.signOut();
  }
}
