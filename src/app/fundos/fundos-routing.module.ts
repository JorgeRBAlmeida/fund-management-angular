import { FundoDetalheComponent } from './fundo-detalhe/fundo-detalhe.component';
import { FundoNaoEncontradoComponent } from './fundo-nao-encontrado/fundo-nao-encontrado.component';
import { FundosComponent } from './fundos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: FundosComponent },
  { path: 'nãoEncontrado', component: FundoNaoEncontradoComponent },
  { path: 'fundo/:codigoDrive', component: FundoDetalheComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundosRoutingModule { }
