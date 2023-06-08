import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';

const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'accueil'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterneRoutingModule { }
