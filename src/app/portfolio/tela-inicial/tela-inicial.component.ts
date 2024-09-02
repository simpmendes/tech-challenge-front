import { Component } from '@angular/core';
import { PortfolioResponseModel } from '../models/portfolio-response.model';
import { ServicePortfolioService } from '../service-portfolio.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddPortfolioDialogComponent } from '../add-portfolio-dialog/add-portfolio-dialog.component';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss']
})
export class TelaInicialComponent {
  portfolios: PortfolioResponseModel[] = [];
  selectedPortfolio: PortfolioResponseModel | null = null;

  constructor(private portfolioService: ServicePortfolioService,
              private router: Router,
              private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadPortfolios();
  }

  loadPortfolios(): void {
    this.portfolioService.getPortfolioPorIdUsuario().subscribe(
      (data) => {
        this.portfolios = data;
      },
      (error) => {
        console.error('Erro ao carregar portfolios:', error);
      }
    );
  }

  // Método para navegar até a tela de detalhes do portfólio
  goToPortfolioDetails(portfolio: PortfolioResponseModel): void {
    this.router.navigate(['portfolio/portfolio-details'], { state: { portfolio } });
  }

  selectPortfolio(portfolio: PortfolioResponseModel): void {
    this.selectedPortfolio = this.selectedPortfolio === portfolio ? null : portfolio;
  }
    // Abre o modal para adicionar um novo portfólio
    openAddPortfolioModal(): void {
      const dialogRef = this.dialog.open(AddPortfolioDialogComponent);
  
      // Após o fechamento do modal, verifica se o portfólio foi adicionado com sucesso e recarrega a lista
      dialogRef.afterClosed().subscribe(result => {
        if (result) { // Se 'result' for verdadeiro, significa que o portfólio foi adicionado com sucesso
          this.loadPortfolios(); // Recarrega a lista de portfólios
        }
      });
    }
}
