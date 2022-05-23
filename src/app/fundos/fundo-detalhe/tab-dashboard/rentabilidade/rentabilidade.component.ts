import { Component, OnInit } from '@angular/core';

const rentFundo = {
  dia: -0.18,
  mes: 1.54,
  ano: 1.25
}
const rentBench = {
  dia: 1.39,
  mes: -0.07,
  ano: -2.01
}

@Component({
  selector: 'app-rentabilidade-card',
  templateUrl: './rentabilidade.component.html',
  styleUrls: ['./rentabilidade.component.scss']
})
export class RentabilidadeComponent implements OnInit {
  rentabilidadeFundo?: any;
  rentabilidadeBench?: any;
  constructor() { }

  ngOnInit(): void {
    this.rentabilidadeFundo = rentFundo;
    this.rentabilidadeBench = rentBench;
  }

  downOrUp(rent: number): string {
    if (rent >= 0) return ('upward');
    else return ('downward');
  }
}
