import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : "auth", loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)},
  {path : "interne" , loadChildren : () => import("./interne/interne.module").then(m => m.InterneModule)},
  {path : "externe" , loadChildren : () => import("./externe/externe.module").then(m => m.ExterneModule)},
  {path : "**" , pathMatch : "full" , redirectTo : "auth"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
