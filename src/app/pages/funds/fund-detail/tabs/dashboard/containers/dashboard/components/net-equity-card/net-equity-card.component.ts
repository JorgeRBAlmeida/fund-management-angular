import { Component, ElementRef, Input, ViewChild, OnInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NetEquity } from '../../../../../../../../../core/models/dashboard/net-equity.model';
import { ChartType, Chart, ChartData } from 'chart.js';

@Component({
  selector: 'fm-net-equity-card',
  templateUrl: './net-equity-card.component.html',
  styleUrls: ['./net-equity-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NetEquityCardComponent implements OnInit, AfterViewInit {
  @Input() data!: NetEquity;
  nETotal: number = 0;
  domestic: number = 0;
  international: number = 0;
  percentDomestic: number = 0;
  percentInter: number = 0;

  // Doughnut
  doughnutChartData?: ChartData<'doughnut'>;
  doughnutChartType: ChartType = 'doughnut';
  chartOptions: any;

  constructor(private ref: ChangeDetectorRef ) {}

  ngOnInit(): void {
    this.nETotal = this.data.total;
    this.domestic = this.data.domestic;
    this.international = this.data.international;
    this.percentDomestic = (this.data.domestic * 100) / this.data.total;
    this.percentInter = (this.data.international * 100) / this.data.total;
  }

  ngAfterViewInit(): void {
    this.doughnutChartData  = {
      //labels: this.doughnutChartLabels,
      datasets: [
        {
          data: [this.percentDomestic, this.percentInter],
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

    this.chartOptions = {
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
    this.ref.detectChanges();
  }
}
