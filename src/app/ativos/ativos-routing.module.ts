import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAtivosComponent } from './lista-ativos/lista-ativos.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListaAtivosComponent }, // Rota padrão para o módulo de ativos
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtivosRoutingModule { }
