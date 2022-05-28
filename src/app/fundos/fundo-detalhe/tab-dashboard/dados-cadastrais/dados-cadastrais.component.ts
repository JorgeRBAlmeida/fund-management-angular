import { Component, OnInit } from '@angular/core';

const dadosCadast: any = {
  benchmark: 110,
  codDrive: 4919,
  codGfi: 1136,
  contaCorrente: 607004,
  contaBbSec: 6068,
  contaSelic: 0,
  contaCetip: 0,
  contaAllFunds: 123456
}
@Component({
  selector: 'app-dados-cadastrais-card',
  templateUrl: './dados-cadastrais.component.html',
  styleUrls: ['./dados-cadastrais.component.scss']
})
export class DadosCadastraisComponent implements OnInit {
  dados: any;
  constructor() { }

  ngOnInit(): void {
    this.dados = dadosCadast;
  }

}
