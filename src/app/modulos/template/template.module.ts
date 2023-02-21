import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';


@NgModule({
  declarations: [
    CabecalhoComponent,
    MenuComponent,
    RodapeComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule
  ], exports: [
    CabecalhoComponent,
    MenuComponent,
    RodapeComponent
  ]
})
export class TemplateModule { }
