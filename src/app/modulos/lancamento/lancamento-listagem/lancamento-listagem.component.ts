import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LancamentoDTOResponse } from 'src/app/entity-class/lancamentoDTOResponse';
import { LancamentoService } from 'src/app/services/lancamento.service';
import { LancamentoFormComponent } from '../lancamento-form/lancamento-form.component';

@Component({
  selector: 'app-lancamento-listagem',
  templateUrl: './lancamento-listagem.component.html',
  styleUrls: ['./lancamento-listagem.component.css']
})
export class LancamentoListagemComponent implements OnInit {

  idUser = 1;
  //
  data_inicio: Date | undefined;
  data_fim: Date | undefined;
  total_lancamentos: number = 0;
  displayedColumns: string[] = ['id', 'valor_parcela', 'data_lancamento', 'descricao', 'tipo'
    , 'qtde_parcelas', 'nr_parcela', 'natureza', 'situacao'];
  //
  dataSource: MatTableDataSource<LancamentoDTOResponse> = new MatTableDataSource;

  constructor(
    private service: LancamentoService,
    private router: Router,
    private dialog: MatDialog
  ) { }


  ngOnInit(): void {
    this.listagemMesAtual();
  }


  listagemMesAtual() {

    this.service.finByIdUserDataMesAtual(this.idUser)
      .subscribe({
        next: (resposta) => {
          console.log(resposta);
          this.data_inicio = resposta.data_inicio;
          this.data_fim = resposta.data_fim;
          this.total_lancamentos = resposta.total_lancamentos;
          this.dataSource = new MatTableDataSource(resposta.lancamentos);
        },
        error: (responseError) => {
          console.log("Erro");
          console.log(responseError);
        }
      });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  listagemPersonalizada() {
    console.log(this.data_inicio);
    console.log(this.data_fim);

    this.service.finByIdUserDataPersonaliozada(this.idUser, this.data_inicio, this.data_fim)
      .subscribe({
        next: (resposta) => {
          console.log(resposta);
          this.data_inicio = resposta.data_inicio;
          this.data_fim = resposta.data_fim;
          this.total_lancamentos = resposta.total_lancamentos;
          this.dataSource = new MatTableDataSource(resposta.lancamentos);
        },
        error: (responseError) => {
          console.log("Erro");
          console.log(responseError);
        }
      });
  }


  novoLancamento() {
    this.dialog.open(LancamentoFormComponent, {
      width: '400px', height: '450px'
    });
  }


}
