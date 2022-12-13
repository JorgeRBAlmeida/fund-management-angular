import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Movements } from '../../models/dashboard/movements.model';

const mov$: Observable<Movements> = of({
  apply: {
    first: 0,
    second: 1
  },
  bailout: {
    first: 5,
    second: 1
  }
});

@Injectable({
  providedIn: 'root'
})
export class MovementsService {
  getMovs() : Observable<Movements> {
    return (mov$);
  }
}
