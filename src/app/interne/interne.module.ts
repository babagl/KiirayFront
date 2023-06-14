import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterneRoutingModule } from './interne-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CardDataComponent } from './components/accueil/dashboard/card-data/card-data.component';
import { DashboardComponent } from './components/accueil/dashboard/dashboard.component';
import { EntreprisesComponent } from './components/accueil/entreprises/entreprises.component';
import { StructuresComponent } from './components/accueil/structures/structures.component';
import { FacturationsComponent } from './components/accueil/facturations/facturations.component';



@NgModule({
  declarations: [
    AccueilComponent,
    CardDataComponent,
    DashboardComponent,
    EntreprisesComponent,
    StructuresComponent,
    FacturationsComponent,

  ],
  imports: [
    CommonModule,
    InterneRoutingModule,
    SharedModule
  ]
})
export class InterneModule { }
