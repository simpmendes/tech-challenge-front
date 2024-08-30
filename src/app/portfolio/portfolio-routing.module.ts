import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TelaInicialComponent } from "./tela-inicial/tela-inicial.component";
import { PortfolioDetailsComponent } from "./portfolio-details/portfolio-details.component";

const routes: Routes = [
    { path: 'tela-inicial', component: TelaInicialComponent },
    { path: 'portfolio-details', component: PortfolioDetailsComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PortfolioRoutingModule { }