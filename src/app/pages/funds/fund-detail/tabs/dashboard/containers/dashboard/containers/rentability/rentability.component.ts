import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Rentability } from 'src/app/core/models/dashboard/rentability.model';
import { RentabilityService } from '../../../../../../../../../core/services/dashboard/rentability.service';
import { delay, map, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'fm-rentability',
  templateUrl: './rentability.component.html',
  styleUrls: ['./rentability.component.scss']
})
export class RentabilityComponent {
  data$: Observable<Rentability> = this.service.getRentabilidade().pipe(delay(500),
                                                          map(res => res),
                                                          catchError(err => {
                                                            return (EMPTY);
                                                          }));
  constructor(private service: RentabilityService) { }
}
