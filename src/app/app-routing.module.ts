import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { UserComponent } from './auth/user/user.component';
import { AuthGuard } from './auth-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent, },
  { path: 'register', component: RegisterComponent },
  { path: 'game', component: UserComponent, canActivate: [AuthGuard]},
  { path: 'statistics', component: UserComponent, canActivate: [AuthGuard]},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
