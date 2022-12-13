import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogService } from './core/utils/dialog.service';
import { DialogComponent } from './core/utils/dialog/dialog.component';
import { HeaderModule } from './layout/header/header.module';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { GlobalHttpErrorHandler } from './core/interceptors/global-http-error-handler.interceptor';

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
    MatSnackBarModule,
    // OTHERS
    NgChartsModule.forRoot()
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    DialogService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpErrorHandler,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
