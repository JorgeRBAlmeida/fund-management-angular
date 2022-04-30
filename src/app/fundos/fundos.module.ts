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



@NgModule({
  declarations: [
    FundosComponent,
    FundoCardComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  exports: [
    FundosComponent
  ]
})
export class FundosModule { }
