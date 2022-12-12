import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Fund } from 'src/app/core/models/fund.model';

@Component({
  selector: 'fm-fund-card',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FundComponent {
  @Input() fund!: Fund;
  @Output() remove: EventEmitter<boolean> = new EventEmitter;
  @Output() detail: EventEmitter<boolean> = new EventEmitter;
}
