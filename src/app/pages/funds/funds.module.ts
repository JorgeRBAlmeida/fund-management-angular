import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundsComponent } from './funds.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FundComponent } from './fund/fund.component';
import { FundAddComponent } from './fund-add/fund-add.component';



@NgModule({
  declarations: [
    FundsComponent,
    FundComponent,
    FundAddComponent
  ],
  imports: [
    CommonModule,
    // MATERIAL
    MatIconModule,
    // ROUTES
    RouterModule.forChild([
      {
        path: '', component: FundsComponent
      }
    ])
  ]
})
export class FundsModule { }
