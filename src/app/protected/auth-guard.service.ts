import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map, tap, last } from 'rxjs/operators';

import { AuthService } from '../auth.service';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../store/auth/auth.reducer';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    // private store: Store<fromApp.AppState>
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean  {
    if (this.authService.isLoggedIn) {
      return true;
    }

    return this.authService.user.pipe(
      map(user => !!user),
      tap(loggedIn => {
        console.log(loggedIn);
        if (loggedIn) {
          return true;
        }

        this.router.navigate(['login']);
        return false;
      })
    );
  }
}
