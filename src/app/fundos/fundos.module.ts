import { SharedModule } from './../shared/shared.module';
import { FundosComponent } from './fundos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FundosComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    FundosComponent
  ]
})
export class FundosModule { }
