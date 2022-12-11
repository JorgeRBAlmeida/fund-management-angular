import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Fund } from '../models/fund.model';
import { CrudService } from './crud.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map, distinctUntilChanged, tap, catchError } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';

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
    super.listEndPoint = '/funds';
    return (super.list());
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

  getFundById(id: number): Observable<Fund> {
    super.getByIdEndPoint = `/funds/${id}`;
    return (super.getById());
  }

  getNotAvalibleFundById(id: number): Observable<Fund> {
    super.getByIdEndPoint = `/notAvalibleFunds/${id}`;
    return (super.getById());
  }

  deleteFund(id: number): void {
    super.deleteEndPoint = `/notAvalibleFunds/${id}`;
    super.delete(id);
  }

  addFund(id: number): void {
    this.getNotAvalibleFundById(id).pipe(map((res: Fund) => {
      let fund;
      fund = res;
      if (fund) {
        super.createEndPoint = `/funds`;
        super.create(fund);
        this.deleteFund(id);
      }
    }));
  }

  removeFundFromList(id: number): void {
    this.getFundById(id).pipe(map((res: Fund) => {
      let fund;
      fund = res;
      if (fund) {
        super.createEndPoint = `/notAvalibleFunds`;
        super.create(fund);
        super.deleteEndPoint = `\funds`;
        this.deleteFund(id);
      }
    }));
  }
}
