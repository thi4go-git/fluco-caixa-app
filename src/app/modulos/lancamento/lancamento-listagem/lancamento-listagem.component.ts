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
    , 'qtde_parcelas', 'nr_parcela', 'natureza'];
  //
  dataSource: MatTableDataSource<LancamentoDTOResponse> = new MatTableDataSource;
  //
  listaLancemantos: LancamentoDTOResponse[] = [];
  saldoPeriodo: string = '';
  entradasPeriodo: string = '';
  saidasPeriodo: string = '';

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
          this.data_inicio = resposta.data_inicio;
          this.data_fim = resposta.data_fim;
          this.total_lancamentos = resposta.total_lancamentos;
          this.listaLancemantos = resposta.lancamentos
          this.dataSource = new MatTableDataSource(this.listaLancemantos);
          this.definirInfo();
        },
        error: (responseError) => {
          console.log("Erro");
          console.log(responseError);
        }
      });
  }


  definirInfo() {
    this.saldoPeriodo = '';
    let sumSaldo = 0;
    let sumEntrada = 0;
    let sumSaida = 0;
    for (let lancamento of this.listaLancemantos) {
      sumSaldo = sumSaldo + lancamento.valor_parcela;
      if (lancamento.tipo == 'CREDITO') {
        sumEntrada = sumEntrada + lancamento.valor_parcela;
      } else {
        sumSaida = sumSaida + lancamento.valor_parcela;
      }
    }
    this.saldoPeriodo =
      sumSaldo.toLocaleString(undefined,
        { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    //
    this.entradasPeriodo =
      sumEntrada.toLocaleString(undefined,
        { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    //
    this.saidasPeriodo =
      sumSaida.toLocaleString(undefined,
        { minimumFractionDigits: 2, maximumFractionDigits: 2 });

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

          this.data_inicio = resposta.data_inicio;
          this.data_fim = resposta.data_fim;
          this.total_lancamentos = resposta.total_lancamentos;
          this.listaLancemantos = resposta.lancamentos
          this.dataSource = new MatTableDataSource(this.listaLancemantos);
          this.definirInfo();
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
