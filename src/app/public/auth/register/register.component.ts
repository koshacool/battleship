import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { formControlStatuses } from '../formControlStatuses';
import { AuthService } from 'src/app/auth.service';
import { ValidationService } from '../validation.service';
import * as fromApp from '../../../store/app.reducers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
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
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, ValidationService.emailValidator] ],
      password: ['', [Validators.required, Validators.minLength(8)] ],
      repeatPassword: ['', [Validators.required, Validators.minLength(8)], ],
    }, { validator:  ValidationService.repeatPasswordValidator });
  }

  onRegister() {
    const { status, value } = this.registerForm;
    this.isSubmitted = true;

    if (status === formControlStatuses.valid) {
      this.authService.signUp(value);
    }
  }
}
