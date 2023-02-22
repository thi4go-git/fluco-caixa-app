import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEnvironment } from 'src/environments/apiEnvironment';
import { LancamentoDTOResponse } from '../entity-class/lancamentoDTOResponse';
import { Observable } from 'rxjs';
import { LancamentoDataDTO } from '../entity-class/lancamentoDataDTO';
import { LancamentoDTO } from '../entity-class/lancamentoDTO';



@Injectable({ providedIn: 'root' })
export class LancamentoService {

  apiLancamento: string = apiEnvironment.apiUrl;

  constructor(private http: HttpClient) { }

  save(lancamento: LancamentoDTO): Observable<LancamentoDTO> {
    return this.http.post<LancamentoDTO>(this.apiLancamento + '/lancamentos', lancamento);
  }

  finByIdUser(idUser: number): Observable<LancamentoDTOResponse[]> {
    return this.http.get<LancamentoDTOResponse[]>(this.apiLancamento + '/lancamentos/usuario/' + idUser);
  }

  finByIdUserDataMesAtual(idUser: number): Observable<LancamentoDataDTO> {
    return this.http.get<LancamentoDataDTO>(this.apiLancamento + '/lancamentos/usuario/' + idUser + '/data');
  }

  finByIdUserDataPersonaliozada(
    idUser: number, inicio: any, fim: any): Observable<LancamentoDataDTO> {
    const params = new HttpParams()
      .set('inicio', inicio)
      .set('fim', fim);
    return this.http.get<LancamentoDataDTO>
      (this.apiLancamento + '/lancamentos/usuario/' + idUser + '/data', { params });
  }

  findAllNaturezas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLancamento + '/lancamentos/natureza');
  }

  findAllSituacao(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLancamento + '/lancamentos/situacao');
  }

  findAllTipo(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLancamento + '/lancamentos/tipo');
  }
}
