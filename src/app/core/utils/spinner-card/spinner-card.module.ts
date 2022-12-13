import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerCardComponent } from './spinner-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    SpinnerCardComponent
  ],
  imports: [
    CommonModule,
    // MATERIAL
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDividerModule
  ],
  exports: [ SpinnerCardComponent ]
})
export class SpinnerCardModule { }
