import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtivosRoutingModule } from './ativos-routing.module';
import { ListaAtivosComponent } from './lista-ativos/lista-ativos.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AtivosService } from './ativos.service';
import { TransacaoModalComponent } from './transacao-modal/transacao-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ListaTransacaoComponent } from './lista-transacao/lista-transacao.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    ListaAtivosComponent,
    TransacaoModalComponent,
    ListaTransacaoComponent
  ],
  imports: [
    AtivosRoutingModule,
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule
  ],
  
  providers: [AtivosService]
})
export class AtivosModule { }
