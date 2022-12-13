import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Rentability, RentDate } from '../../../../../../../../../core/models/dashboard/rentability.model';

@Component({
  selector: 'fm-rentability-card',
  templateUrl: './rentability-card.component.html',
  styleUrls: ['./rentability-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RentabilityCardComponent implements OnInit {
  @Input()data!: Rentability;
  rentabilityFund?: RentDate;
  rentabilityBench?: RentDate;
  ngOnInit() {
    this.rentabilityFund = this.data.fund;
    this.rentabilityBench = this.data.benchmark;
  }

  downOrUp(rent: number): string {
    if (rent > 0) return ('upward');
    else if (rent < 0) return ('downward');
    return ('');
  }
}
