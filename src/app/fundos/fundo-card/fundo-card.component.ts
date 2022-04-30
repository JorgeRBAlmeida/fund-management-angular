import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundo-card',
  templateUrl: './fundo-card.component.html',
  styleUrls: ['./fundo-card.component.scss']
})
export class FundoCardComponent implements OnInit {

  @Input() status: 'check' | 'priority_high' | 'clear' = 'check';
  constructor() { }

  ngOnInit(): void {
  }

}
