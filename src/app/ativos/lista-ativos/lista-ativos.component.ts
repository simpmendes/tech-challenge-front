import { Component } from '@angular/core';
import { AtivosService } from '../ativos.service';
import { AtivoResponseModel } from '../models/ativo-response.model';

@Component({
  selector: 'app-lista-ativos',
  templateUrl: './lista-ativos.component.html',
  styleUrls: ['./lista-ativos.component.scss']
})
export class ListaAtivosComponent {
  ativos: AtivoResponseModel[] = [];

  constructor(private ativosService: AtivosService) {}
  
  ngOnInit(): void {
    this.loadAtivos();
  }

  loadAtivos(): void {
    this.ativosService.getAtivos().subscribe(
      (data) => {
        this.ativos = data;
      },
      (error) => {
        console.error('Erro ao carregar ativos:', error);
      }
    );
  }
}
