import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Movements, MovType } from 'src/app/core/models/dashboard/movements.model';

@Component({
  selector: 'fm-movements-card',
  templateUrl: './movements-card.component.html',
  styleUrls: ['./movements-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovementsCardComponent {
  @Input() data!: Movements;
  movApply?: MovType;
  movBailout?: MovType;

  ngOnInit() {
    this.movApply = this.data.apply;
    this.movBailout = this.data.bailout;
  }
}
