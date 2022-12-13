import { Component, Input } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'fm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() title: string = '';

  constructor(public authService :AuthService) {}
}
