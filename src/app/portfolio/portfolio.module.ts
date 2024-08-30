import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ServicePortfolioService } from './service-portfolio.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';


@NgModule({
  declarations: [
    TelaInicialComponent,
    PortfolioDetailsComponent
  ],
  imports: [
    PortfolioRoutingModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  providers: [ServicePortfolioService]
})
export class PortfolioModule { }
