import { MaterialModule } from './material/material.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    MaterialModule
  ],
  exports: [
    HeaderModule,
    FooterModule,
    MaterialModule
  ]
})
export class SharedModule { }
