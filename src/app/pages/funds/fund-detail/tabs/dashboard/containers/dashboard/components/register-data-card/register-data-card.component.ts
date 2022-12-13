import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RegisterData } from 'src/app/core/models/dashboard/register-data.models';

@Component({
  selector: 'fm-register-data-card',
  templateUrl: './register-data-card.component.html',
  styleUrls: ['./register-data-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterDataCardComponent {
  @Input() data!: RegisterData | null;
}
