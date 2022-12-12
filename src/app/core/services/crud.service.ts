import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { tap, catchError, take } from "rxjs/operators";

export class CrudService<T> {

  constructor(protected http: HttpClient, protected api: string) { }

  private END_POINT_CREATE: string = '/create';
  private END_POINT_LIST: string = '/list';
  private END_POINT_GET: string = '/getById';
  private END_POINT_UPDATE: string = '/update';
  private END_POINT_DELETE: string = '/delete';

  set createEndPoint(novoEndPoint: string) {
    this.END_POINT_CREATE = novoEndPoint;
  }

  set listEndPoint(novoEndPoint: string) {
    this.END_POINT_LIST = novoEndPoint;
  }

  set getByIdEndPoint(novoEndPoint: string) {
    this.END_POINT_GET = novoEndPoint;
  }

  set updateEndPoint(novoEndPoint: string) {
    this.END_POINT_UPDATE = novoEndPoint;
  }

  set deleteEndPoint(novoEndPoint: string) {
    this.END_POINT_DELETE = novoEndPoint;
  }

  create(record: T): Observable<T> {
    return this.http.post<T>(`${this.api}${this.END_POINT_CREATE}`, record)
      .pipe(
        tap(console.log),
        catchError(this.handleError<T>('creation of data')),
        take(1)
      );
  }

  list(params?: any): Observable<T[]> {
    return this.http.get<T[]>(`${this.api}${this.END_POINT_LIST}`, { params })
      .pipe(
        tap(console.log),
        catchError(this.handleError<T>('list of data')),
        take(1)
      );
  }

  getById(params?: any): Observable<T> {
    console.log(`${this.api}${this.END_POINT_GET}`);
    return this.http.get<T>(`${this.api}${this.END_POINT_GET}`, { params })
      .pipe(
        tap(console.log),
        catchError(this.handleError<T>('list of data')),
        take(1)
      );
  }

  update(record: T) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' },
      ),
    }
    return this.http.put<T>(`${this.api}${this.END_POINT_UPDATE}`, record, httpOptions)
      .pipe(
        tap(console.log),
        catchError(this.handleError<T>('update of data')),
        take(1)
      );
  }

  delete(id: any) {
    return this.http.delete<T>(`${this.api}${this.END_POINT_DELETE}${id}`)
      .pipe(
        tap(console.log),
        catchError(this.handleError<T>('deletion of data')),
        take(1)
      );
  }

  handleError<T>(operation = 'A problem occured on the operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
