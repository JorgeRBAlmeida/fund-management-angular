import { Component, Input } from '@angular/core';

@Component({
  selector: 'fm-spinner-card',
  templateUrl: './spinner-card.component.html',
  styleUrls: ['./spinner-card.component.scss']
})
export class SpinnerCardComponent {
  @Input() title: string = '';
}
