import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hedge } from '../../models/dashboard/hedge.model';

const hedge$: Observable<Hedge> = of({
  exist: true,
  current: 95,
  target: 100,
  limit: 2,
})

@Injectable({
  providedIn: 'root'
})
export class HedgeService {
  getHedge(): Observable<Hedge> {
    return (hedge$);
  }
}
