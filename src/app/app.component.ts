import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'battleship';
  isAuthenticated: boolean = false;
  userName: string = '';
  
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    const user = this.authService.isAuthenticated();

    console.log(user)
  }
}
