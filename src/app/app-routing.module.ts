import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule) },
  { path: 'portfolio', loadChildren: () => import('../app/portfolio/portfolio.module').then(m => m.PortfolioModule) },
  { path: 'ativos', loadChildren: () => import('../app/ativos/ativos.module').then(m => m.AtivosModule) },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
