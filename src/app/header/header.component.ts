import { Component, Output, OnInit, EventEmitter, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Store } from '@ngrx/store';

import { AuthService } from '../auth.service';
import { User } from '../shared/user.interface';
import * as fromApp from '../store/app.reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;
  isAuthinticated: boolean;

  constructor(
    private authService: AuthService,
    private spinnerService: Ng4LoadingSpinnerService,
    private zone: NgZone,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.store.select('auth')
      .subscribe(({ user, isAuthinticated }) => {
        this.user = user;
        this.isAuthinticated = isAuthinticated;
        this.zone.run(() => {});
      });
  }

  onLogout() {
    this.authService.logout();
  }
}
