import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficosRoutingModule } from './graficos-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    GraficosRoutingModule,
    MatCardModule,
    MatDividerModule
  ], exports: [
    DashboardComponent
  ]
})
export class GraficosModule { }
