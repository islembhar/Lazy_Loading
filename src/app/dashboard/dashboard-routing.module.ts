import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AccueilComponent } from './accueil/accueil.component';
import { IncomesComponent } from './incomes/incomes.component';
import { AchatsComponent } from './achats/achats.component';

const routes: Routes = [
  {path:'',redirectTo:'accueil',pathMatch:'full'},
  { path: '', component: DashboardComponent,
  children: [
{path:'accueil',component:AccueilComponent},
{path:'income',component:IncomesComponent},
{path:'achats',component:AchatsComponent},
  ]

 

  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
