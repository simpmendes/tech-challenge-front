import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AtivoResponseModel } from './models/ativo-response.model';
import { environment } from 'src/environments/environments';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TransacaoRequestModel } from './models/transacao-request.model';
import { PortfolioResponseModel } from '../portfolio/models/portfolio-response.model';

@Injectable({
  providedIn: 'root'
})
export class AtivosService {
  baseUrl = environment.apiURL + 'api/ativo/';
  
  constructor(private http: HttpClient) { }

  getAtivos(): Observable<AtivoResponseModel[]> {
    return this.http.get<AtivoResponseModel[]>(`${this.baseUrl}obter-lista-ativos`);
  }
  comprarAtivo(transacao: TransacaoRequestModel): Observable<any> {
    return this.http.post(`${environment.apiURL}api/transacao/efetua-compra-ativo`, transacao, { responseType: 'text' }).pipe(
      catchError(this.handleError) // Adiciona o tratamento de erro
    );
  }
  getPortfolios(): Observable<PortfolioResponseModel[]> {
    return this.http.get<PortfolioResponseModel[]>(`${environment.apiURL}api/portfolio/obter-lista-por-usuario`);
  }

  venderAtivo(transacao: TransacaoRequestModel): Observable<any> {
    return this.http.post(`${environment.apiURL}api/transacao/efetua-venda-ativo`, transacao, { responseType: 'text' }).pipe(
      catchError(this.handleError) // Adiciona o tratamento de erro
    );
  }

  // Método para tratar erros
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Erro desconhecido';

    if (error.error instanceof ErrorEvent) {
      // Erro do lado do cliente
      errorMessage = `Erro do cliente: ${error.error.message}`;
    } else {
      // Erro do lado do servidor
      errorMessage = `Erro do servidor: ${error.status}, ` +
                     `Mensagem: ${error.error}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
 
}
