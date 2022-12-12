import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundDetailComponent } from './fund-detail.component';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DashboardModule } from './tabs/dashboard/dashboard.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    FundDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // COMPS
    DashboardModule,
    // MATERIAL
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    // ROUTES
    RouterModule.forChild([
      /* { path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      }, */
      { path: '', component: FundDetailComponent,
        //canActivate: [AuthGuard],
        /* children: [
          {
            path: 'dashboard',
            // canActivate: [AuthGuard],
            loadChildren: () => import('./tab-dashboard/tab-dashboard.module')
          .then((m) => m.TabDashboardModule)},
          {
            path: 'wallet',
            // canActivate: [AuthGuard],
            loadChildren: () => import('./tab-wallet/tab-wallet.module')
          .then((m) => m.TabWalletModule)},
          {
            path: 'flow',
            // canActivate: [AuthGuard],
            loadChildren: () => import('./tab-flow/tab-flow.module')
          .then((m) => m.TabFlowModule)},
          {
            path: 'status',
            // canActivate: [AuthGuard],
            loadChildren: () => import('./tab-status/tab-status.module')
          .then((m) => m.TabStatusModule)},
        ] */
      },
    ])
  ],
  exports: [ FundDetailComponent ]
})
export class FundDetailModule { }
