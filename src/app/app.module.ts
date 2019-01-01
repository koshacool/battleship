import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NotifierModule } from 'angular-notifier';

import { environment } from '../environments/environment';
import { customNotifierOptions } from './notifierConfig';
import { AuthService } from './auth.service';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { PublicPagesModule } from './public/public-pages.module';
import { ProtectedPagesModule } from './protected/protected-pages.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './public/not-found/not-found.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    Ng4LoadingSpinnerModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StoreModule.forRoot(reducers),
    NotifierModule.withConfig(customNotifierOptions),

    SharedModule,
    ProtectedPagesModule,
    PublicPagesModule,
    AppRoutingModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
