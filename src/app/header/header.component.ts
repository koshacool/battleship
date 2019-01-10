import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthService } from '../auth.service';
import { User } from '../shared/user.interface';
import * as fromApp from '../store/app.reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();
  user: User;
  isAuthinticated: boolean;

  constructor(
    private authService: AuthService,
    private spinnerService: Ng4LoadingSpinnerService,
    private zone: NgZone,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {
  }

  ngOnInit() {
    this.store.select('auth')
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(({ user, isAuthinticated }) => {
        this.user = user;
        this.isAuthinticated = isAuthinticated;
        this.zone.run(() => {
        });
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onLogout() {
    this.authService.logout();
  }
}
