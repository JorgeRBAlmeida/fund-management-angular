import { Component, OnInit } from '@angular/core';

const movAplicacao: any = {
  primeiro: 0,
  segundo: 1
}

const movResgate: any = {
  primeiro: 5,
  segundo: 1
}
@Component({
  selector: 'app-movimentacoes-card',
  templateUrl: './movimentacoes.component.html',
  styleUrls: ['./movimentacoes.component.scss']
})
export class MovimentacoesComponent implements OnInit {
  movimentoAp: any;
  movimentoRs: any;
  constructor() { }

  ngOnInit(): void {
    this.movimentoAp = movAplicacao;
    this.movimentoRs = movResgate;
  }

}
