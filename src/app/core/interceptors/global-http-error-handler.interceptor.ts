import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class GlobalHttpErrorHandler implements HttpInterceptor {

  constructor(private _snackBar: MatSnackBar) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(err => {
        /* console.log('Error pego pelo GlobalHttpErrorHandler...'); */
        this.tratamentoErrosHttp(err);
        return throwError(err);
      })
    );

  }

  tratamentoErrosHttp(error: HttpErrorResponse) {
    switch (error.status) {
      case 500:
        this._snackBar.open(
          'Internal Error on the Server!',
          'Try again or contact the support team.');
        break;
      default :
    }
  }
}
