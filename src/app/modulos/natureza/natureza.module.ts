import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaturezaRoutingModule } from './natureza-routing.module';
import { NaturezaFormComponent } from './natureza-form/natureza-form.component';
import { NaturezaListComponent } from './natureza-list/natureza-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NaturezaFormComponent,
    NaturezaListComponent
  ],
  imports: [
    CommonModule,
    NaturezaRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule
  ], exports: [
    NaturezaFormComponent,
    NaturezaListComponent
  ]
})
export class NaturezaModule { }
