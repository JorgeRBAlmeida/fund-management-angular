import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-tab-dashboard',
  templateUrl: './tab-dashboard.component.html',
  styleUrls: ['./tab-dashboard.component.scss']
})
export class TabDashboardComponent implements OnInit {

  //selecionar = new SelectionModel<FundoEx>(true, []);

  constructor() { }

  ngOnInit(): void {
  }

}
