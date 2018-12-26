import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // console.log(this.authService.isAuthenticated())
  }

  onLogin() {
    this.authService.googleLogin()
    .then(() => {
      this.router.navigate(['user']);
    });
  }
}
