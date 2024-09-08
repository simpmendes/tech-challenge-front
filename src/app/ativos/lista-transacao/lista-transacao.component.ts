import { Component } from '@angular/core';
import { AtivosService } from '../ativos.service';
import { TransacaoResponseModel } from '../models/transacao-response.model';

@Component({
  selector: 'app-lista-transacao',
  templateUrl: './lista-transacao.component.html',
  styleUrls: ['./lista-transacao.component.scss']
})
export class ListaTransacaoComponent {
  transacoes: TransacaoResponseModel[] = [];
  displayedColumns: string[] = ['dataTransacao', 'nomeTipoTransacao', 'ativo', 'quantidade', 'preco'];

  constructor(private ativosService: AtivosService) {}

  ngOnInit(): void {
    this.loadTransacoes();
  }

  loadTransacoes(): void {
    this.ativosService.getTransacoesUsuario().subscribe(
      (data) => {
        this.transacoes = data;
      },
      (error) => {
        console.error('Erro ao carregar transações:', error);
      }
    );
  }
}
