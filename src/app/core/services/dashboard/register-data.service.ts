import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { RegisterData } from '../../models/dashboard/register-data.models';

const registerData$: Observable<RegisterData> = of({
  benchmark: 110,
  id: 4919,
  codGfi: 1136,
  countCorrente: 607004,
  countSec: 6068,
  countSelic: 0,
  countCetip: 0,
  countAllFunds: 123456
})

@Injectable({
  providedIn: 'root'
})
export class RegisterDataService {

  getDadosCadastrais(): Observable<RegisterData> {
    return (registerData$);
  }
}
