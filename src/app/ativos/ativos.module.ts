import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtivosRoutingModule } from './ativos-routing.module';
import { ListaAtivosComponent } from './lista-ativos/lista-ativos.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AtivosService } from './ativos.service';



@NgModule({
  declarations: [
    ListaAtivosComponent
  ],
  imports: [
    AtivosRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    
  ],
  
  providers: [AtivosService]
})
export class AtivosModule { }
