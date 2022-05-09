import { Injectable } from '@angular/core';
import { Fundo } from '../shared/model/fundo.model';

@Injectable({
  providedIn: 'root'
})
export class FundosService {

  getFundos(): Fundo[] {
    return [
      {
        codigoDrive: 4912,
        nome: '4912 BB TOP RF Credito Privado',
        status: 'clear',
        ativoExterior: 20.05,
        hedge: 95.01,
        prazoMedio: 0,
        plFundo: 569635675.57,
        limiteFundo: 635675.57
      },
      {
        codigoDrive: 1234545,
        nome: '1234545 BB TOP RF Credito Privado',
        status: 'clear',
        ativoExterior: 20.05,
        hedge: 95.01,
        prazoMedio: 0,
        plFundo: 569635675.57,
        limiteFundo: 635675.57
      },
      {
        codigoDrive: 2345,
        nome: '2345 BB TOP RF Credito Privado',
        status: 'priority_high',
        ativoExterior: 20.05,
        hedge: 95.01,
        prazoMedio: 0,
        plFundo: 569635675.57,
        limiteFundo: 635675.57
      },
      {
        codigoDrive: 98762,
        nome: '98762 BB TOP RF Credito Privado',
        status: 'priority_high',
        ativoExterior: 20.05,
        hedge: 95.01,
        prazoMedio: 0,
        plFundo: 569635675.57,
        limiteFundo: 635675.57
      },
      {
        codigoDrive: 12598,
        nome: '12598 BB TOP RF Credito Privado',
        status: 'priority_high',
        ativoExterior: 20.05,
        hedge: 95.01,
        prazoMedio: 0,
        plFundo: 569635675.57,
        limiteFundo: 635675.57
      },
      {
        codigoDrive: 9447,
        nome: '9447 BB TOP RF Credito Privado',
        status: 'check',
        ativoExterior: 20.05,
        hedge: 95.01,
        prazoMedio: 0,
        plFundo: 569635675.57,
        limiteFundo: 635675.57
      },
      {
        codigoDrive: 3379,
        nome: '3379 BB TOP RF Credito Privado',
        status: 'check',
        ativoExterior: 20.05,
        hedge: 95.01,
        prazoMedio: 0,
        plFundo: 569635675.57,
        limiteFundo: 635675.57
      },
      {
        codigoDrive: 5842,
        nome: '5842 BB TOP RF Credito Privado',
        status: 'check',
        ativoExterior: 20.05,
        hedge: 95.01,
        prazoMedio: 0,
        plFundo: 569635675.57,
        limiteFundo: 635675.57
      },
      {
        codigoDrive: 71269,
        nome: '71269 BB TOP RF Credito Privado',
        status: 'check',
        ativoExterior: 20.05,
        hedge: 95.01,
        prazoMedio: 0,
        plFundo: 569635675.57,
        limiteFundo: 635675.57
      }
    ]
  }

  getFundo(codigoDrive: number) {
    const fundo = this.getFundos().filter((fundo) => fundo.codigoDrive == codigoDrive);
    return fundo ? fundo : null;
  }
}

