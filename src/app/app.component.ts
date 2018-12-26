import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  user = {};

  constructor(private authService: AuthService, private router: Router) {
    this.authService.user.subscribe(
      user => {
        if (user) {
          this.user = user;
          this.isLoggedIn = true;
        } else {
          this.user = {};
          this.isLoggedIn = false;
        }

        console.log(this)
      }
    );
  }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
  }
}
