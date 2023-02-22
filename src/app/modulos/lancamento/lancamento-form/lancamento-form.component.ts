import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LancamentoDTO } from 'src/app/entity-class/lancamentoDTO';
import { LancamentoService } from 'src/app/services/lancamento.service';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-lancamento-form',
  templateUrl: './lancamento-form.component.html',
  styleUrls: ['./lancamento-form.component.css']
})
export class LancamentoFormComponent implements OnInit {

  hide = true;
  natureza: any[] = [];
  situacao: any[] = [];

  tipo_doc: any[] = [];

  lancamento: LancamentoDTO;
  data_referencia!: Date;

  constructor(
    public dialogRef: MatDialogRef<LancamentoFormComponent>,
    private service: LancamentoService,
    private snackBar: MatSnackBar
  ) {
    this.lancamento = new LancamentoDTO
  }


  ngOnInit(): void {
    this.definirNatureza();
    this.definirSituacao();
    this.definirTipo();
  }

  definirNatureza() {
    this.service.findAllNaturezas()
      .subscribe({
        next: (resposta) => {
          this.natureza = resposta;
        },
        error: (responseError) => {
          console.log("Erro");
          console.log(responseError);
        }
      });
  }

  definirSituacao() {
    this.service.findAllSituacao()
      .subscribe({
        next: (resposta) => {
          this.situacao = resposta;
        },
        error: (responseError) => {
          console.log("Erro");
          console.log(responseError);
        }
      });
  }


  definirTipo() {
    this.service.findAllTipo()
      .subscribe({
        next: (resposta) => {
          this.tipo_doc = resposta;
        },
        error: (responseError) => {
          console.log("Erro");
          console.log(responseError);
        }
      });
  }

  fecharDialog() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.service.save(this.lancamento)
      .subscribe({
        next: (resposta) => {
          console.log(resposta);
          this.snackBar.open("Sucesso ao salvar!", "Info!", {
            duration: 2000
          });
          window.location.reload();   
        },
        error: (responseError) => {
          console.log("Erro");
          console.log(responseError);
        }
      });

  }

}
