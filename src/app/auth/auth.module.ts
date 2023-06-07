import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { SlidesComponent } from './components/authentification/slides/slides.component';
import { LoginFormComponent } from './components/authentification/login-form/login-form.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';


@NgModule({
  declarations: [
    
  
    AuthentificationComponent,
            SlidesComponent,
            LoginFormComponent,
            PasswordChangeComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
