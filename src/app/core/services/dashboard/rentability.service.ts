import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Rentability } from '../../models/dashboard/rentability.model';

const rent$: Observable<Rentability> = of({
  fund: {
    day: 0,
    mouth: 1.54,
    year: 1.25
  },
  benchmark: {
    day: 1.39,
    mouth: -0.07,
    year: -2.01
  }
})

@Injectable({
  providedIn: 'root'
})
export class RentabilityService {

  getRentabilidade(): Observable<Rentability> {
    return (rent$);
  }
}
