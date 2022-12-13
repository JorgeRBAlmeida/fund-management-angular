import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { EMPTY } from 'rxjs/internal/observable/empty';
import { catchError } from 'rxjs/internal/operators/catchError';
import { delay } from 'rxjs/internal/operators/delay';
import { map } from 'rxjs/internal/operators/map';
import { RegisterData } from 'src/app/core/models/dashboard/register-data.models';
import { RegisterDataService } from 'src/app/core/services/dashboard/register-data.service';

@Component({
  selector: 'fm-register-data',
  templateUrl: './register-data.component.html',
  styleUrls: ['./register-data.component.scss']
})
export class RegisterDataComponent {
  data$: Observable<RegisterData> = this.service.getDadosCadastrais().pipe(delay(1000),
                                                          map(res => res),
                                                          catchError(err => {
                                                            return (EMPTY);
                                                          }));
  constructor(private service: RegisterDataService) { }
}
