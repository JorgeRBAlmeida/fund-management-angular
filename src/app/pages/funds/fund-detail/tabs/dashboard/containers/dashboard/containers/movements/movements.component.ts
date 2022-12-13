import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { EMPTY } from 'rxjs/internal/observable/empty';
import { catchError, delay, map } from 'rxjs/operators';
import { Movements } from 'src/app/core/models/dashboard/movements.model';
import { MovementsService } from 'src/app/core/services/dashboard/movements.service';

@Component({
  selector: 'fm-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss']
})
export class MovementsComponent {
  data$: Observable<Movements> = this.service.getMovs().pipe(delay(500),
                                                          map(res => res),
                                                          catchError(err => {
                                                            return (EMPTY);
                                                          }));
  constructor(private service: MovementsService) { }
}
