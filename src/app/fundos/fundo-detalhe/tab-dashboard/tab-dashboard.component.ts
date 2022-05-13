import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-tab-dashboard',
  templateUrl: './tab-dashboard.component.html',
  styleUrls: ['./tab-dashboard.component.scss']
})
export class TabDashboardComponent implements OnInit {

  // Doughnut
  //public doughnutChartLabels: string[] = ['Brasil', 'Exterior'];
  public doughnutChartData: ChartData<'doughnut'> = {
    //labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [80, 20],
        backgroundColor: [
          'rgb(251, 251, 36)',
          'rgb(70, 94, 255)'
        ],
        hoverBackgroundColor: [
          'rgb(253, 253, 110)',
          'rgb(126, 142, 255)'
        ],
        hoverBorderColor: [
          'rgb(251, 251, 251)',
          'rgb(251, 251, 251)'
        ],
      }
    ]
  };
  public chartOptions: any = {
    cutout: 55
  };
  public doughnutChartType: ChartType = 'doughnut';
  constructor() { }

  ngOnInit(): void {
  }


  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
