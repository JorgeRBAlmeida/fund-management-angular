import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HedgeCardComponent } from './containers/dashboard/components/hedge-card/hedge-card.component';
import { MovementsCardComponent } from './containers/dashboard/components/movements-card/movements-card.component';
import { NetEquityCardComponent } from './containers/dashboard/components/net-equity-card/net-equity-card.component';
import {
  RegisterDataCardComponent,
} from './containers/dashboard/components/register-data-card/register-data-card.component';
import { RentabilityCardComponent } from './containers/dashboard/components/rentability-card/rentability-card.component';
import { HedgeComponent } from './containers/dashboard/containers/hedge/hedge.component';
import { MovementsComponent } from './containers/dashboard/containers/movements/movements.component';
import { NetEquityComponent } from './containers/dashboard/containers/net-equity/net-equity.component';
import { RegisterDataComponent } from './containers/dashboard/containers/register-data/register-data.component';
import { RentabilityComponent } from './containers/dashboard/containers/rentability/rentability.component';
import { DashboardComponent } from './dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SpinnerCardModule } from 'src/app/core/utils/spinner-card/spinner-card.module';



@NgModule({
  declarations: [
    DashboardComponent,
    RentabilityComponent,
    MovementsComponent,
    NetEquityComponent,
    HedgeComponent,
    HedgeCardComponent,
    MovementsCardComponent,
    NetEquityCardComponent,
    RentabilityCardComponent,
    RegisterDataCardComponent,
    RegisterDataComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SpinnerCardModule,
    // MATERIAL
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    // OTHERS
    NgChartsModule
  ],
  exports: [ DashboardComponent ]
})
export class DashboardModule { }
