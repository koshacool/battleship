import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  token: string;

  constructor(public afAuth: AngularFireAuth) {
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
    return !!firebase.auth().currentUser;
  }

  test1() {
    firebase.auth().onAuthStateChanged(res => console.log(1234, res))
  }

  googleLogin() {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');

      return this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
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
  }
}
