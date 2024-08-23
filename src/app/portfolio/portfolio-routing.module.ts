import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TelaInicialComponent } from "./tela-inicial/tela-inicial.component";

const routes: Routes = [
    { path: 'tela-inicial', component: TelaInicialComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PortfolioRoutingModule { }