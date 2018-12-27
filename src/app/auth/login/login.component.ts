import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formControlStatuses } from '../formControlStatuses';


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
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(8)] ]
    });
  }

  ngOnInit() {
    // console.log(this.authService.isAuthenticated())
  }

  onGoogleLogin() {
    this.authService.googleLogin()
    .then(() => {
      this.router.navigate(['game']);
    });
  }

  onFormLogin() {
    const { status, value } = this.loginForm;
    this.isSubmitted = true;

    if (status === formControlStatuses.valid) {
      this.authService.signIn(value)
      .then(() => this.router.navigate(['game']))
      .catch(err => console.log('err', err));
    }
  }

}
