import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAtivosComponent } from './lista-ativos/lista-ativos.component';
import { RouterModule, Routes } from '@angular/router';
import { ListaTransacaoComponent } from './lista-transacao/lista-transacao.component';

const routes: Routes = [
  { path: '', component: ListaAtivosComponent }, // Rota padrão para o módulo de ativos
  { path: 'transacoes', component: ListaTransacaoComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtivosRoutingModule { }
