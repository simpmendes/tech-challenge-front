import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PortfolioResponseModel } from 'src/app/portfolio/models/portfolio-response.model';
import { AtivosService } from '../ativos.service';
import { TransacaoRequestModel } from '../models/transacao-request.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transacao-modal',
  templateUrl: './transacao-modal.component.html',
  styleUrls: ['./transacao-modal.component.scss']
})
export class TransacaoModalComponent {
  portfolios: PortfolioResponseModel[] = [];
  transacaoData: TransacaoRequestModel;
  tipoTransacao: string;

  constructor(
    private dialogRef: MatDialogRef<TransacaoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ativosService: AtivosService,
    private toastr: ToastrService
  ) {
    this.tipoTransacao = data.tipoTransacao;
    this.transacaoData = {
      portifolio_Id: 0,
      ativo_Id: data.ativo.id,
      quantidade: 0,
      preco: 0
    };
  }
  ngOnInit(): void {
    // Carregar lista de portfólios para exibição no select
    this.ativosService.getPortfolios().subscribe(
      (data) => {
        this.portfolios = data;
      },
      (error) => {
        console.error('Erro ao carregar portfólios:', error);
      }
    );
  }

  onCancel(): void {
    this.dialogRef.close();
  }
  onConfirm(): void {
    if (this.tipoTransacao === 'comprar') {
      this.ativosService.comprarAtivo(this.transacaoData).subscribe(
        (response) => {
                this.dialogRef.close(true);
                this.toastr.success('Resultado Transação: ', response);
              },
        (error) => this.toastr.error(error.message)
      );
    } else if (this.tipoTransacao === 'vender') {
      this.ativosService.venderAtivo(this.transacaoData).subscribe(
        (response) => {
          this.dialogRef.close(true);
          this.toastr.success('Resultado Transação: ', response);
        },
        (error) => this.toastr.error(error.message)
      );
    }
  }
}
