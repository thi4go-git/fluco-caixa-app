import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateModule } from './modulos/template/template.module';
import { LancamentoService } from './services/lancamento.service';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './componentes/layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { LancamentoModule } from './modulos/lancamento/lancamento.module';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { DateFormatPipe } from './entity-class/date-format-pipe';
import { GraficosModule } from './modulos/graficos/graficos.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NotFoundComponent,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    TemplateModule,
    LancamentoModule,
    GraficosModule
  ],
  providers: [
    LancamentoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
