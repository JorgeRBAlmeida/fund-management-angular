import { ChartData, ChartType, ChartEvent } from 'chart.js';
import { Component, OnInit } from '@angular/core';

const patrimonioLiquido = {
  total: 569635675.57,
  brasil: 409846979.16,
  exterior: 159788696.41
}

@Component({
  selector: 'app-patrimonio-liquido-card',
  templateUrl: './patrimonio-liquido.component.html',
  styleUrls: ['./patrimonio-liquido.component.scss']
})
export class PatrimonioLiquidoComponent implements OnInit {
  plTotal: number = 0;
  plBrasil: number = 0;
  plExterior: number = 0;
  percentBrasil: number = 50;
  percentExterior: number = 50;
  // Doughnut
  //public doughnutChartLabels: string[] = ['Brasil', 'Exterior'];
  doughnutChartData: ChartData<'doughnut'> = {
    //labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [this.percentBrasil, this.percentExterior],
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
  chartOptions: any = {
    cutout: 55,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            let label = tooltipItem.dataset.data[tooltipItem.dataIndex].toFixed(2);
            return (` ${label} %`);
          }
        }
      }
    }
  };
  doughnutChartType: ChartType = 'doughnut';
  constructor() { }

  ngOnInit(): void {
    this.plTotal = patrimonioLiquido.total;
    this.plBrasil = patrimonioLiquido.brasil;
    this.plExterior = patrimonioLiquido.exterior;
    this.setPercentageChar(this.plTotal, this.plBrasil, this.plExterior);

  }

  private setPercentageChar(total: number, brasil: number, exterior: number): void {
    this.percentBrasil = (brasil * 100) / total;
    this.percentExterior = (exterior * 100) / total;
    this.doughnutChartData.datasets[0].data[0] = this.percentBrasil;
    this.doughnutChartData.datasets[0].data[1] = this.percentExterior;
  }
  // events
  chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
