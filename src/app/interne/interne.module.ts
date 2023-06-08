import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterneRoutingModule } from './interne-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AccueilComponent } from './components/accueil/accueil.component';


@NgModule({
  declarations: [
    AccueilComponent
  ],
  imports: [
    CommonModule,
    InterneRoutingModule,
    SharedModule
  ]
})
export class InterneModule { }
