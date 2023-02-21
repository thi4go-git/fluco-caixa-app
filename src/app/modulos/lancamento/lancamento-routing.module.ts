import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/componentes/layout/layout.component';
import { NotFoundComponent } from 'src/app/componentes/not-found/not-found.component';
import { LancamentoListagemComponent } from './lancamento-listagem/lancamento-listagem.component';




const routes: Routes = [
  {
    path: 'lancamento', component: LayoutComponent, children: [
      { path: 'listagem', component: LancamentoListagemComponent, title: 'Lançamentos Período' },
      { path: '', redirectTo: '/lancamento/listagem', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentoRoutingModule { }
