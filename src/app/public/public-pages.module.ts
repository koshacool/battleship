import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ROUTES } from '../constants';

const publicRoutes: Routes = [
  { path: ROUTES.root, component: HomeComponent },
  { path: ROUTES.notFound, component: NotFoundComponent},
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(publicRoutes),
    AuthModule,
  ],
})
export class PublicPagesModule {
}
