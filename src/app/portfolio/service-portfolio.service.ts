import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PortfolioResponseModel } from './models/portfolio-response.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { PortfolioRequestModel } from './models/portfolio-request.model';

@Injectable({
  providedIn: 'root'
})
export class ServicePortfolioService {

  baseUrl = environment.apiURL + 'api/portfolio/';
  constructor(private http: HttpClient) {}

  getPortfolioPorIdUsuario(): Observable<PortfolioResponseModel[]> {
    return this.http.get<PortfolioResponseModel[]>(`${this.baseUrl}obter-lista-por-usuario`);
  }
  addPortfolio(portfolio: PortfolioRequestModel): Observable<any> {
    return this.http.post(this.baseUrl + 'cadastra-portfolio', portfolio, { responseType: 'text' });
  }
}
