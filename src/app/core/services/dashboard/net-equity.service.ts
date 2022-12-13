import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { NetEquity } from '../../models/dashboard/net-equity.model';

const netEquity$: Observable<NetEquity> = of({
    total: 569635675.57,
    domestic: 409846979.16,
    international: 159788696.41
})

@Injectable({
  providedIn: 'root'
})
export class NetEquityService {
  getNetEquity(): Observable<NetEquity> {
    return (netEquity$);
  }
}
