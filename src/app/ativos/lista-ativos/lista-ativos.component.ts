import { Component } from '@angular/core';
import { AtivosService } from '../ativos.service';
import { AtivoResponseModel } from '../models/ativo-response.model';
import { MatDialog } from '@angular/material/dialog';
import { TransacaoModalComponent } from '../transacao-modal/transacao-modal.component';

@Component({
  selector: 'app-lista-ativos',
  templateUrl: './lista-ativos.component.html',
  styleUrls: ['./lista-ativos.component.scss']
})
export class ListaAtivosComponent {
  ativos: AtivoResponseModel[] = [];

  constructor(private ativosService: AtivosService,
    private dialog: MatDialog
  ) {}
  
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
  openTransactionModal(ativo: AtivoResponseModel, tipoTransacao: string): void {
    const dialogRef = this.dialog.open(TransacaoModalComponent, {
      width: '400px',
      data: { ativo, tipoTransacao }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Recarrega a lista de ativos ou realiza alguma ação após a transação
        this.loadAtivos();
      }
    });
  }
}
