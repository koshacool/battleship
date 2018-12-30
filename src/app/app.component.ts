import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private spinnerService: Ng4LoadingSpinnerService,
    ) {}

  ngOnInit() {
    
  }
}
