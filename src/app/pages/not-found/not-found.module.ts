import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ NotFoundComponent ],
  imports: [
    CommonModule,
    // MATERIAL
    MatIconModule,
    MatButtonModule
  ],
  exports: [ NotFoundComponent ]
})
export class NotFoundModule { }
