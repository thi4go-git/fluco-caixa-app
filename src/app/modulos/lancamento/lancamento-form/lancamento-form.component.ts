import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-lancamento-form',
  templateUrl: './lancamento-form.component.html',
  styleUrls: ['./lancamento-form.component.css']
})
export class LancamentoFormComponent {

  formulario: FormGroup;
  hide = true;

  constructor(
    public dialogRef: MatDialogRef<LancamentoFormComponent>,
    private formBuild: FormBuilder,
  ) {

    this.formulario = this.formBuild.group({
      tipo: ['', Validators.required],
      descricao: ['', Validators.required],
      data_referencia: ['', Validators.required],
      valor_total: ['', Validators.required],
      qtde_parcelas: ['', Validators.required],
      natureza: ['', Validators.required],
      id_usuario: ['1', Validators.required],
    })
  }

  fecharDialog() {
    this.dialogRef.close();
  }

}
