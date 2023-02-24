import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/componentes/layout/layout.component';
import { NotFoundComponent } from 'src/app/componentes/not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'graficos', component: LayoutComponent, children: [
      { path: 'dashboard', component: DashboardComponent, title: 'Dashboard' },
      { path: '', redirectTo: '/graficos/dashboard', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficosRoutingModule { }
