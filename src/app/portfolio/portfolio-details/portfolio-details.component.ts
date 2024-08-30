import { Component, OnInit } from '@angular/core';
import { PortfolioResponseModel } from '../models/portfolio-response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.scss']
})
export class PortfolioDetailsComponent implements OnInit{
  portfolio: PortfolioResponseModel;

  constructor(private router: Router) {
    // Obtém o objeto portfolio do estado da navegação
    const navigation = this.router.getCurrentNavigation();
    this.portfolio = navigation?.extras.state?.['portfolio'];
  }

  ngOnInit(): void {
    // if (!this.portfolio) {
    //   // Se não houver portfolio no estado, navega de volta para a página inicial
    //   this.router.navigate(['/']);
    // }
  }
}
