import { FundosService } from './fundos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fundo } from '../shared/model/fundo.model';

@Component({
  selector: 'app-fundos',
  templateUrl: './fundos.component.html',
  styleUrls: ['./fundos.component.scss']
})
export class FundosComponent implements OnInit {

  fundos?: Fundo[];
  codigoDrive: string = '';

  constructor(private fundosService: FundosService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.fundos = this.fundosService.getFundos();
  }

  newFundo() {
    const codDrive: number = Number(this.codigoDrive);
    if (codDrive != null) {
      this.fundosService.addFundo(codDrive);
      this.fundos = this.fundosService.getFundos();
    }

  }

}
