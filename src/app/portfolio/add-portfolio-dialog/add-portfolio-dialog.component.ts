import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicePortfolioService } from '../service-portfolio.service';
import { PortfolioRequestModel } from '../models/portfolio-request.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-portfolio-dialog',
  templateUrl: './add-portfolio-dialog.component.html',
  styleUrls: ['./add-portfolio-dialog.component.scss']
})
export class AddPortfolioDialogComponent {
  portfolioData: PortfolioRequestModel = { nome: '', descricao: '' };

  constructor(
    public dialogRef: MatDialogRef<AddPortfolioDialogComponent>,
    private portfolioService: ServicePortfolioService,
    private toastr: ToastrService
  ) {}

  onAddPortfolio(): void {
    if (this.portfolioData.nome && this.portfolioData.descricao) {
      this.portfolioService.addPortfolio(this.portfolioData).subscribe(
        (response: string) => {
          this.toastr.success('Portfólio adicionado com sucesso:', response);
          
          this.dialogRef.close(true); // Fecha o diálogo e indica sucesso
        },
        (error) => {
          this.toastr.error(error.error)
          this.dialogRef.close(false); // Fecha o diálogo e indica falha
        }
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close(false); // Retorna 'false' para indicar cancelamento
  }
}
