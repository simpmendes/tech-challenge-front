import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AtivoResponseModel } from './models/ativo-response.model';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AtivosService {
  baseUrl = environment.apiURL + 'api/ativo/';
  
  constructor(private http: HttpClient) { }

  getAtivos(): Observable<AtivoResponseModel[]> {
    return this.http.get<AtivoResponseModel[]>(`${this.baseUrl}obter-lista-ativos`);
  }
}
