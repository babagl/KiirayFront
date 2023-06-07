import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { SlidesComponent } from './components/authentification/slides/slides.component';
import { LoginFormComponent } from './components/authentification/login-form/login-form.component';


@NgModule({
  declarations: [
    AuthentificationComponent,
            SlidesComponent,
            LoginFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
