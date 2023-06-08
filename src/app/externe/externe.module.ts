import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExterneRoutingModule } from './externe-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AccueilComponent } from './components/accueil/accueil.component';


@NgModule({
  declarations: [
    AccueilComponent
  ],
  imports: [
    CommonModule,
    ExterneRoutingModule,
    SharedModule
  ]
})
export class ExterneModule { }
