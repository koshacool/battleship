import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean  {
    if (this.authService.isAuthenticated()) {
      return true;
    }

    return this.authService.user.pipe(
      map(user => !!user),
      tap(loggedIn => {
        if (loggedIn) {
          return true;
        }

        this.router.navigate(['login']);
        return false;
      })
    );
  }
}
