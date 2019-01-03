import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ControlMessagesComponent } from './control-messages/control-messages.component';
import routes from '../../constants/routes';


const authRoutes: Routes = [
  { path: routes.login, component: LoginComponent, },
  { path: routes.register, component: RegisterComponent },
];

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ControlMessagesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(authRoutes),
  ],
})
export class AuthModule {
}
