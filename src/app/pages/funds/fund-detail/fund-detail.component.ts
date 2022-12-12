import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FundsService } from '../../../core/services/funds.service';
import { Fund } from '../../../core/models/fund.model';

@Component({
  selector: 'fm-fund-detail',
  templateUrl: './fund-detail.component.html',
  styleUrls: ['./fund-detail.component.scss']
})
export class FundDetailComponent implements OnInit, AfterViewInit {


  fund?: Fund;

  constructor(
    private route: ActivatedRoute,
    private fundService: FundsService
    ) {}

  ngOnInit(): void {
      this.fund = this.route.snapshot.data['fund'];
      console.log(this.route.snapshot.data['fund']);
  }

  ngAfterViewInit(): void {
    this.fund = this.route.snapshot.data['fund'];
    console.log(this.route.snapshot.data['fund']);
  }

}
