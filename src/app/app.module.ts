import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './layout/header/header.module';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogService } from './core/utils/dialog.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DialogComponent } from './core/utils/dialog/dialog.component';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // LAYOUT
    HeaderModule,
    NotFoundModule,
    // MATERIAL
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    // OTHERS
    NgChartsModule.forRoot()
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
