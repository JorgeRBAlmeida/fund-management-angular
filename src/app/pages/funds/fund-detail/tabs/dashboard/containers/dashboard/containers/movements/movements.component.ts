import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { EMPTY } from 'rxjs/internal/observable/empty';
import { catchError, delay, map } from 'rxjs/operators';
import { fadeOut } from 'src/app/animations/fadeOut.animations';
import { Movements } from 'src/app/core/models/dashboard/movements.model';
import { MovementsService } from 'src/app/core/services/dashboard/movements.service';
import { fadeIn } from '../../../../../../../../../animations/fadeIn.animations';

@Component({
  selector: 'fm-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.scss'],
  animations: [fadeIn, fadeOut]
})
export class MovementsComponent {
  data$: Observable<Movements> = this.service.getMovs().pipe(delay(500),
                                                          map(res => res),
                                                          catchError(err => {
                                                            return (EMPTY);
                                                          }));
  constructor(private service: MovementsService) { }
}
