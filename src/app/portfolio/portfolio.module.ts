import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';



@NgModule({
  declarations: [
    TelaInicialComponent
  ],
  imports: [
    PortfolioRoutingModule,
    CommonModule
  ]
})
export class PortfolioModule { }
