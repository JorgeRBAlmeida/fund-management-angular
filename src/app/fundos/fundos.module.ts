import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgChartsModule } from 'ng2-charts';
import { MatTabsModule } from '@angular/material/tabs';
import { FundoDetalheComponent } from './fundo-detalhe/fundo-detalhe.component';
import { FundosRoutingModule } from './fundos-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FundosComponent } from './fundos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundoCardComponent } from './fundo-card/fundo-card.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FundoNaoEncontradoComponent } from './fundo-nao-encontrado/fundo-nao-encontrado.component';
import { TabDashboardComponent } from './fundo-detalhe/tab-dashboard/tab-dashboard.component';
import { TabPreviaGfiComponent } from './fundo-detalhe/tab-previa-gfi/tab-previa-gfi.component';
import { TabFluxoDeCaixaComponent } from './fundo-detalhe/tab-fluxo-de-caixa/tab-fluxo-de-caixa.component';
import { FormsModule } from '@angular/forms';
import { RentabilidadeComponent } from './fundo-detalhe/tab-dashboard/rentabilidade/rentabilidade.component';
import { MovimentacoesComponent } from './fundo-detalhe/tab-dashboard/movimentacoes/movimentacoes.component';
import { DadosCadastraisComponent } from './fundo-detalhe/tab-dashboard/dados-cadastrais/dados-cadastrais.component';
import { PatrimonioLiquidoComponent } from './fundo-detalhe/tab-dashboard/patrimonio-liquido/patrimonio-liquido.component';
import { HedgeCambialComponent } from './fundo-detalhe/tab-dashboard/hedge-cambial/hedge-cambial.component';
import { CarteiraBrasilComponent } from './fundo-detalhe/tab-dashboard/carteira-brasil/carteira-brasil.component';
import { CarteiraExteriorComponent } from './fundo-detalhe/tab-dashboard/carteira-exterior/carteira-exterior.component';



@NgModule({
  declarations: [
    FundosComponent,
    FundoCardComponent,
    FundoDetalheComponent,
    FundoNaoEncontradoComponent,
    TabDashboardComponent,
    TabPreviaGfiComponent,
    TabFluxoDeCaixaComponent,
    RentabilidadeComponent,
    MovimentacoesComponent,
    DadosCadastraisComponent,
    PatrimonioLiquidoComponent,
    HedgeCambialComponent,
    CarteiraBrasilComponent,
    CarteiraExteriorComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    FundosRoutingModule,
    MatTabsModule,
    NgChartsModule,
    FormsModule,
    MatCheckboxModule
  ]
})
export class FundosModule { }
