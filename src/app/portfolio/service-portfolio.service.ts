import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PortfolioResponseModel } from './models/portfolio-response.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ServicePortfolioService {

  baseUrl = environment.apiURL + 'api/portfolio/';
  constructor(private http: HttpClient) {}

  getPortfolioPorIdUsuario(): Observable<PortfolioResponseModel[]> {
    return this.http.get<PortfolioResponseModel[]>(`${this.baseUrl}obter-lista-por-usuario`);
  }
}
