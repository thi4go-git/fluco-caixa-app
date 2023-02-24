import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiEnvironment } from 'src/environments/apiEnvironment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  urlApi: string = apiEnvironment.apiUrl;

  constructor(private http: HttpClient) { }


}
