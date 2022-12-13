import { Observable } from 'rxjs/internal/Observable';
import { Component } from '@angular/core';
import { HedgeService } from 'src/app/core/services/dashboard/hedge.service';
import { Hedge } from '../../../../../../../../../core/models/dashboard/hedge.model';
import { delay } from 'rxjs/internal/operators/delay';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';
import { EMPTY } from 'rxjs/internal/observable/empty';

@Component({
  selector: 'fm-hedge',
  templateUrl: './hedge.component.html',
  styleUrls: ['./hedge.component.scss']
})
export class HedgeComponent {
  data$: Observable<Hedge> = this.service.getHedge().pipe(delay(500),
                                                          map(res => res),
                                                          catchError(err => {
                                                            return (EMPTY);
                                                          }));
  constructor(private service: HedgeService) { }
}
