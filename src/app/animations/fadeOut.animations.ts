import { animate, style, transition, trigger } from '@angular/animations';

export const fadeOut = trigger('fadeOut', [
  transition(':leave', [style({ opacity: 0 }), animate('200ms ease-out')]),
]);
