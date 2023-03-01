import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentoRoutingModule } from './lancamento-routing.module';
import { LancamentoListagemComponent } from './lancamento-listagem/lancamento-listagem.component';
import { LancamentoFormComponent } from './lancamento-form/lancamento-form.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DecimalPipe } from 'src/app/entity-class/decimal-pipe';








@NgModule({
  declarations: [
    LancamentoListagemComponent,
    LancamentoFormComponent,
    DecimalPipe
  ],
  imports: [
    CommonModule,
    LancamentoRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatSnackBarModule,



  ], exports: [
    LancamentoListagemComponent,
    LancamentoFormComponent
  ]
})
export class LancamentoModule { }
