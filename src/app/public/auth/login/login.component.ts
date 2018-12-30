import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AuthService } from 'src/app/auth.service';
import { formControlStatuses } from '../formControlStatuses';
import * as fromApp from '../../../store/app.reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted: Boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private store: Store<fromApp.AppState>
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.store.select('auth').subscribe(
      ({ isAuthinticated }) => {
        if (isAuthinticated) {
          this.router.navigate(['/']);
        }
      }
    );
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(8)] ]
    });
  }

  onGoogleLogin() {
    this.authService.googleLogin();
  }

  onFormLogin() {
    const { status, value } = this.loginForm;
    this.isSubmitted = true;

    if (status === formControlStatuses.valid) {
      this.authService.signIn(value);
    }
  }
}
