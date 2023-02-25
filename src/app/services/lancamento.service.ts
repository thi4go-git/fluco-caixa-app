import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEnvironment } from 'src/environments/apiEnvironment';
import { Observable } from 'rxjs';
import { LancamentoDataDTO } from '../entity-class/lancamentoDataDTO';
import { LancamentoDTO } from '../entity-class/lancamentoDTO';
import { DashboardDTO } from '../entity-class/dashboardDTO';
import { AutenticacaoService } from './autenticacao.service';



@Injectable({ providedIn: 'root' })
export class LancamentoService {


  username: string = "";

  apiLancamento: string = apiEnvironment.apiUrl;

  constructor(
    private http: HttpClient,
    private authService: AutenticacaoService
  ) {
    this.username = this.authService.getUsuarioAutenticado();
  }

  save(lancamento: LancamentoDTO): Observable<LancamentoDTO> {
    return this.http.post<LancamentoDTO>(this.apiLancamento + '/lancamentos', lancamento);
  }


  finByIdUserDataMesAtual(): Observable<LancamentoDataDTO> {
    const params = new HttpParams()
      .set('username', this.username);
    return this.http.get<LancamentoDataDTO>(this.apiLancamento + '/lancamentos', { params });
  }

  finByIdUserDataPersonaliozada(
    inicio: any, fim: any): Observable<LancamentoDataDTO> {
    const params = new HttpParams()
      .set('inicio', inicio)
      .set('fim', fim)
      .set('username', this.username);
    return this.http.get<LancamentoDataDTO>
      (this.apiLancamento + '/lancamentos', { params });
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

  getLancamentosDashboard(): Observable<DashboardDTO> {
    const params = new HttpParams()
      .set('username', this.username);
    return this.http.get<DashboardDTO>(this.apiLancamento + '/lancamentos/dashboard', { params });
  }
}
