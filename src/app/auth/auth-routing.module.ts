import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './components/authentification/authentification.component';

const routes: Routes = [
  {path : "login", component : AuthentificationComponent},
  {path : "**" , pathMatch: "full" ,redirectTo : "login"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
