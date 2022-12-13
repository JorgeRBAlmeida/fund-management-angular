import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Fund } from '../models/fund.model';
import { FundsService } from '../services/funds.service';

@Injectable({
  providedIn: 'root'
})
export class FundDetailResolver implements Resolve<Fund> {

  constructor(private service: FundsService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Fund> {
    if (route.params && route.params['id']) {
      const id: number = Number(route.params['id']);
      return (this.service.getFundById(id));
    }
    return of({
      id: 0,
      name: '',
      status: '',
      offShore: 0,
      hedge: 0,
      limit: 0,
      netEquity: 0
    });
  }
}
