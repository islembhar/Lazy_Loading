import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AchatsComponent } from './achats/achats.component';
import { IncomesComponent } from './incomes/incomes.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AccueilComponent,
    AchatsComponent,
    IncomesComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
