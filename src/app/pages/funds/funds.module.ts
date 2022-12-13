import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

import { FundAddComponent } from './fund-add/fund-add.component';
import { FundComponent } from './fund/fund.component';
import { FundsComponent } from './funds.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FundDetailResolver } from 'src/app/core/resolvers/fund-detail.resolver';
import { AuthGuard } from 'src/app/core/auth/auth.guard';



@NgModule({
  declarations: [
    FundsComponent,
    FundComponent,
    FundAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // MATERIAL
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    // ROUTES
    RouterModule.forChild([
      {
        path: '', component: FundsComponent
      },
      {
        path: 'fund/:id',
        canActivate: [AuthGuard],
        loadChildren: () => import('./fund-detail/fund-detail.module')
       .then((m) => m.FundDetailModule),
       resolve: { fund: FundDetailResolver }
      },
    ])
  ]
})
export class FundsModule { }
