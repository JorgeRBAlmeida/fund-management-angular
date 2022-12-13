import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { EMPTY } from 'rxjs/internal/observable/empty';
import { catchError } from 'rxjs/internal/operators/catchError';
import { delay } from 'rxjs/internal/operators/delay';
import { map } from 'rxjs/internal/operators/map';
import { NetEquityService } from 'src/app/core/services/dashboard/net-equity.service';
import { NetEquity } from '../../../../../../../../../core/models/dashboard/net-equity.model';
import { fadeIn } from '../../../../../../../../../animations/fadeIn.animations';
import { fadeOut } from 'src/app/animations/fadeOut.animations';

@Component({
  selector: 'fm-net-equity',
  templateUrl: './net-equity.component.html',
  styleUrls: ['./net-equity.component.scss'],
  animations: [fadeIn, fadeOut]
})
export class NetEquityComponent {
  data$: Observable<NetEquity> = this.service.getNetEquity().pipe(delay(500),
                                                          map(res => res),
                                                          catchError(err => {
                                                            return (EMPTY);
                                                          }));
  constructor(private service: NetEquityService) { }
}
