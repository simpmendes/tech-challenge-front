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
import { AddPortfolioDialogComponent } from './add-portfolio-dialog/add-portfolio-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    TelaInicialComponent,
    PortfolioDetailsComponent,
    AddPortfolioDialogComponent
  ],
  imports: [
    PortfolioRoutingModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    ToastrModule.forRoot({     // Configuração global do Toastr
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),

  ],
  providers: [ServicePortfolioService]
})
export class PortfolioModule { }
