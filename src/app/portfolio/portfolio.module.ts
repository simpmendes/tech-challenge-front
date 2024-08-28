import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ServicePortfolioService } from './service-portfolio.service';


@NgModule({
  declarations: [
    TelaInicialComponent
  ],
  imports: [
    PortfolioRoutingModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [ServicePortfolioService]
})
export class PortfolioModule { }
