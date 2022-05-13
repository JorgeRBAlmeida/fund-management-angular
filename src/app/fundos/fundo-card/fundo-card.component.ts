import { Fundo } from 'src/app/shared/model/fundo.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundo-card',
  templateUrl: './fundo-card.component.html',
  styleUrls: ['./fundo-card.component.scss']
})
export class FundoCardComponent implements OnInit {

  @Input() fundo!: Fundo;
  constructor() { }

  ngOnInit(): void {
  }

}