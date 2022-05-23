import { ChartData, ChartType, ChartEvent } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patrimonio-liquido-card',
  templateUrl: './patrimonio-liquido.component.html',
  styleUrls: ['./patrimonio-liquido.component.scss']
})
export class PatrimonioLiquidoComponent implements OnInit {


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
