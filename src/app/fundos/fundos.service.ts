import { Injectable } from '@angular/core';
import { Fundo } from '../shared/model/fundo.model';

const fundosAtivos: Fundo[] = [
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
];

const fundosNaoAtivos: Fundo[] = [
  {
    codigoDrive: 1543556,
    nome: '1543556 BB TOP RF Credito Privado',
    status: '',
    ativoExterior: 20.05,
    hedge: 95.01,
    prazoMedio: 0,
    plFundo: 569635675.57,
    limiteFundo: 0
  },
  {
    codigoDrive: 634329,
    nome: '634329 BB TOP RF Credito Privado',
    status: '',
    ativoExterior: 20.05,
    hedge: 95.01,
    prazoMedio: 0,
    plFundo: 569635675.57,
    limiteFundo: 0
  },
  {
    codigoDrive: 85488,
    nome: '85488 BB TOP RF Credito Privado',
    status: '',
    ativoExterior: 20.05,
    hedge: 95.01,
    prazoMedio: 0,
    plFundo: 569635675.57,
    limiteFundo: 0
  }
]

@Injectable({
  providedIn: 'root'
})
export class FundosService {

  getFundos(): Fundo[] {
    return fundosAtivos;
  }

  private getFundosNapAtivos() {
    return fundosNaoAtivos;
  }

  getFundo(codigoDrive: number) {
    const fundo = this.getFundos().filter((fundo) => fundo.codigoDrive == codigoDrive);
    return fundo ? fundo : null;
  }

  addFundo(codigoDrive: number) {
    const fundo = this.getFundosNapAtivos().filter((fundo) => fundo.codigoDrive == codigoDrive);
    const fundoSelected = fundo[0];
    if (fundoSelected) {
      fundosNaoAtivos.splice(fundosNaoAtivos.indexOf(fundoSelected), 1);
      fundosAtivos.push(fundoSelected);
    }
  }

  removeFundo(codigoDrive: number) {
    const fundo = this.getFundos().filter((fundo) => fundo.codigoDrive == codigoDrive);
    const fundoSelected = fundo[0];
    fundosAtivos.splice(fundosAtivos.indexOf(fundoSelected), 1);
    fundosNaoAtivos.push(fundoSelected);
  }
}

