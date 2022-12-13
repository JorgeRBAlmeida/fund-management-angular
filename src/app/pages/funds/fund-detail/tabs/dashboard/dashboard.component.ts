import { Component } from '@angular/core';
import { fadeOut } from 'src/app/animations/fadeOut.animations';
import { fadeIn } from '../../../../../animations/fadeIn.animations';

@Component({
  selector: 'fm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [fadeIn, fadeOut]
})
export class DashboardComponent {

}
