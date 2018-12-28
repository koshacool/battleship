import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { formControlStatuses } from '../formControlStatuses';
import { AuthService } from 'src/app/auth.service';
import { ValidationService } from '../validation.service';

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
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.authService.user.subscribe(
      user => {
        if (user) {
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
      this.authService.signUp(value)
        .then(res => this.router.navigate(['/game']))
        .catch(err => console.log('err', err));
    }
  }
}
