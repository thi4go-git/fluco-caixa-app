import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEnvironment } from 'src/environments/apiEnvironment';
import { LancamentoDTOResponse } from '../entity-class/lancamentoDTOResponse';
import { Observable } from 'rxjs';
import { LancamentoDataDTO } from '../entity-class/lancamentoDataDTO';



@Injectable({ providedIn: 'root' })
export class LancamentoService {

  apiAlvara: string = apiEnvironment.apiUrl;

  constructor(private http: HttpClient) { }

  finByIdUser(idUser: number): Observable<LancamentoDTOResponse[]> {
    return this.http.get<LancamentoDTOResponse[]>(this.apiAlvara + '/lancamentos/usuario/' + idUser);
  }

  finByIdUserDataMesAtual(idUser: number): Observable<LancamentoDataDTO> {
    return this.http.get<LancamentoDataDTO>(this.apiAlvara + '/lancamentos/usuario/' + idUser + '/data');
  }

  finByIdUserDataPersonaliozada(
    idUser: number, inicio: any, fim: any): Observable<LancamentoDataDTO> {
    const params = new HttpParams()
      .set('inicio', inicio)
      .set('fim', fim);
    return this.http.get<LancamentoDataDTO>
      (this.apiAlvara + '/lancamentos/usuario/' + idUser + '/data' , { params });
  }
}
