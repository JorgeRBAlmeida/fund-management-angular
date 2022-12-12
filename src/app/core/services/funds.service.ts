import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Fund } from '../models/fund.model';
import { CrudService } from './crud.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, distinctUntilChanged, tap, catchError, delay } from 'rxjs/operators';
import { BehaviorSubject, of, Subscription } from 'rxjs';

let avalibleFunds$: Observable<Fund[]> = of([
  {
    "id": 4912,
    "name": "4912 | TOP RF PRIVATE CREDIT",
    "status": "clear",
    "offShore": 20.05,
    "hedge": 95.01,
    "limit": 0,
    "netEquity": 569635675.57
  },
  {
    "id": 504912,
    "name": "504912 | RFC CP IE LP FI",
    "status": "clear",
    "offShore": 20.05,
    "hedge": 95.01,
    "limit": 0,
    "netEquity": 569635675.57
  },
  {
    "id": 4969,
    "name": "4969 | RF LP HEDGE CRED PRIV IE FI",
    "status": "priority_high",
    "offShore": 20.05,
    "hedge": 95.01,
    "limit": 0,
    "netEquity": 569635675.57
  },
  {
    "id": 4994,
    "name": "4994 | RF LP GLOBAL HEDGE CRPR IE FI",
    "status": "priority_high",
    "offShore": 20.05,
    "hedge": 95.01,
    "limit": 0,
    "netEquity": 569635675.57
  },
  {
    "id": 6223,
    "name": "6223 | MM BRAZILPREV EXTERN IV IE FI",
    "status": "priority_high",
    "offShore": 20.05,
    "hedge": 95.01,
    "limit": 0,
    "netEquity": 569635675.57
  },
  {
    "id": 140,
    "name": "140 | RF DEBT EXTERNAL LP MIL FI",
    "status": "check",
    "offShore": 20.05,
    "hedge": 95.01,
    "limit": 0,
    "netEquity": 569635675.57
  },
  {
    "id": 5014,
    "name": "5014 | RF LP VERTICE VII CP IE FI",
    "status": "check",
    "offShore": 20.05,
    "hedge": 95.01,
    "limit": 0,
    "netEquity": 569635675.57
  },
  {
    "id": 4569,
    "name": "4569 | TOP PRIVATE RF LP",
    "status": "check",
    "offShore": 20.05,
    "hedge": 95.01,
    "limit": 0,
    "netEquity": 569635675.57
  },
  {
    "id": 4734,
    "name": "4734 | TOP RF Q FI RF LP",
    "status": "check",
    "offShore": 20.05,
    "hedge": 95.01,
    "limit": 0,
    "netEquity": 569635675.57
  }
])

let notAvalibleFunds$: Observable<Fund[]> = of([
  {
    "id": 1543556,
    "name": "1543556 | RF EXTERNAL Q FI RF LP",
    "status": "",
    "offShore": 20.05,
    "hedge": 95.01,
    "limit": 0,
    "netEquity": 569635675.57
  },
  {
    "id": 634329,
    "name": "634329 | VERTICE VII CP Q FI",
    "status": "",
    "offShore": 20.05,
    "hedge": 95.01,
    "limit": 0,
    "netEquity": 569635675.57
  },
  {
    "id": 85488,
    "name": "85488 | TOP RF DEBT LP",
    "status": "",
    "offShore": 20.05,
    "hedge": 95.01,
    "limit": 0,
    "netEquity": 569635675.57
  }
])

export interface FundsState {
  data: Fund[];
  error: string | null;
  loading: boolean;
  loaded: boolean;
}

const inicialState: FundsState = {
  data: [],
  error: null,
  loading: false,
  loaded: false
}

@Injectable({
  providedIn: 'root'
})
export class FundsService extends CrudService<Fund> {

  private readonly state = new BehaviorSubject<FundsState>(inicialState);
  readonly state$ = this.state.asObservable().pipe(distinctUntilChanged());

  get currentState(): FundsState {
    return this.state.getValue();
  }

  constructor(protected override http: HttpClient) {
    super(http, environment.API);
  }

  getFunds(): Observable<Fund[]> {
    /* super.listEndPoint = '/funds';
    return (super.list()); */
    return avalibleFunds$.pipe(delay(1000));
  }

  getNotAvalibleFunds(): Observable<Fund[]> {
    /* super.listEndPoint = '/funds';
    return (super.list()); */
    return notAvalibleFunds$.pipe(delay(1000));
  }

  private setData(data: Fund[]): void {
    this.state.next({
      ...this.currentState,
      data,
      loading: false,
      loaded: true,
      error: null
    })
  }

  private setError(error: string): void {
    this.state.next({
      ...this.currentState,
      error,
      loading: false,
      loaded: true,
      data: []
    })
  }

  loadFunds(): Observable<any> {
    this.state.next({
      ...this.currentState,
      loading: true,
      error: null,
      loaded: false
    })

    return this.getFunds().pipe(
      tap(res => this.setData(res)),
      catchError(error => {
        this.setError('An error has occured. Plese try again later!');
        return of(error);
      })
    )
  }

  getFundById(id: number): Observable<Fund | undefined> {
    /* super.getByIdEndPoint = `/funds/${id}`;
    return (super.getById()); */
    return this.getFunds().pipe(
      map(res => {
        console.log(res);
        return   res.find(fund => fund.id === id)
      }));
  }

  getNotAvalibleFundById(id: number): Observable<Fund | undefined> {
    /* super.getByIdEndPoint = `/notAvalibleFunds/${id}`;
    return (super.getById()); */
    return this.getNotAvalibleFunds().pipe(
      map(res => {
        console.log(res);
        return   res.find(fund => fund.id === id)
      }));
  }

  /* deleteFund(id: number): void {
    super.deleteEndPoint = `/notAvalibleFunds/${id}`;
    super.delete(id);
  } */
  deleteFund(id: number, fundList: 'avalible' | 'notAvalible'): void {
    if (fundList === 'avalible') {
      avalibleFunds$.pipe(map(arr => {
        const index = arr.findIndex(obj => obj.id === id);
        arr.splice(index, 1);
        return arr;
      })).subscribe(res => avalibleFunds$ = of(res))
    }
    else if (fundList === 'notAvalible') {
      notAvalibleFunds$.pipe(map(arr => {
        const index = arr.findIndex(obj => obj.id === id);
        arr.splice(index, 1);
        return arr;
      })).subscribe(res => notAvalibleFunds$ = of(res))
    }
  }

  addFund(id: number): void {
    /* this.getNotAvalibleFundById(id).pipe(map((res: Fund) => {
      let fund;
      fund = res;
      if (fund) {
        super.createEndPoint = `/funds`;
        super.create(fund);
        this.deleteFund(id);
      }
    })); */
    this.getNotAvalibleFundById(id).pipe(map(fund => fund)).subscribe(
      fund => {
        if (fund !== undefined) {
          avalibleFunds$.pipe(map(arr => {
            arr.push(fund);
            return arr;
          })).subscribe(res => {
            this.setData(res);
            avalibleFunds$ = of(res);
          })
          this.deleteFund(fund.id, 'notAvalible');

        }
      }
    )
  }

  removeFundFromList(id: number): void {
    /* this.getFundById(id).pipe(map((res: Fund) => {
      let fund;
      fund = res;
      if (fund) {
        super.createEndPoint = `/notAvalibleFunds`;
        super.create(fund);
        super.deleteEndPoint = `\funds`;
        this.deleteFund(id);
      }
    })); */
    this.getFundById(id).pipe(map(fund => fund)).subscribe(
      fund => {
        if (fund !== undefined) {
          notAvalibleFunds$.pipe(map(arr => {
            arr.push(fund);
            return arr;
          })).subscribe(res => {
            this.setData(res);
            notAvalibleFunds$ = of(res);
          })
          this.deleteFund(fund.id, 'avalible');

        }
      }
    )
  }
}

