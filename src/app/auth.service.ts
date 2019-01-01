import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NotifierService } from 'angular-notifier';
import { Store } from '@ngrx/store';
import { throwError, Subject } from 'rxjs';
import { first } from 'rxjs/operators';

import * as fromApp from './store/app.reducers';
import * as authActions from './store/auth/auth.actions';
import { User } from './shared/user.interface';

@Injectable()
export class AuthService {
  user = new Subject<User>();
  isLoggedIn: boolean = false;

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private spinnerService: Ng4LoadingSpinnerService,
    private notifierService: NotifierService,
    private store: Store<fromApp.AppState>,
  ) {
    this.spinnerService.show();

    this.afAuth.authState.pipe(first()).subscribe(user => {
        this.spinnerService.hide();

        if (user) {
          const { displayName, email, photoURL: photoUrl } = user;
          
          this.isLoggedIn = true;
          this.user.next({ displayName, email, photoUrl });
          this.store.dispatch(new authActions.Signup({ displayName, email, photoUrl }));
          this.getToken();
        } else {
          this.isLoggedIn = false;
          this.user.next(null);
          this.store.dispatch(new authActions.Logout());
        }
    });
  }

  handleError(error) {
    this.spinnerService.hide();
    this.notifierService.show({
      message: error.message,
      type: 'error',
    });
    
    console.error('Auth service error:', error);
    return throwError(error);
  }
  
  handleAuth(res) {
    const { displayName, email, photoURL: photoUrl } = res.user;
    
    this.isLoggedIn = true;
    this.spinnerService.hide();
    this.store.dispatch(new authActions.Signup({ displayName, email, photoUrl }));
    this.getToken();
    this.router.navigate(['game']);
  }

  getToken() {
    const user = firebase.auth().currentUser;

    if (user) {
      user.getIdToken()
        .then((token: string) => 
          this.store.dispatch(new authActions.SetToken(token))
        )
        .catch(this.handleError.bind(this));
    }
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    this.spinnerService.show();

    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(this.handleAuth.bind(this))
      .catch(this.handleError.bind(this));
  }

  signIn(data: { email: string, password: string }) {
    this.spinnerService.show();
  
    return firebase.auth().signInWithEmailAndPassword(data.email, data.password)
      .then(this.handleAuth.bind(this))
      .catch(this.handleError.bind(this));
  }

  signUp(data: { email: string, password: string }) {
    this.spinnerService.show();

    return firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then(this.handleAuth.bind(this))
      .catch(this.handleError.bind(this));
  }

  logout() {
    firebase.auth().signOut();
    
    this.isLoggedIn = false;
    this.store.dispatch(new authActions.Logout());
    this.router.navigate(['/login'])
  }
}
