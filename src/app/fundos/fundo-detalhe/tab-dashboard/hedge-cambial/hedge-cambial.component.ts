import { ChartConfiguration, ChartData, ChartType, ChartEvent, Chart } from 'chart.js';
import AnnotationPlugin, { AnnotationOptions, AnnotationPluginOptions } from "chartjs-plugin-annotation";
import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hedge-cambial-card',
  templateUrl: './hedge-cambial.component.html',
  styleUrls: ['./hedge-cambial.component.scss']
})
export class HedgeCambialComponent implements OnInit {
  atualValue: number = 95;
  metaValue: number = 100;
  limiteValue: number = 2;
  headgeGroup!: FormGroup;
  limiteControl = new FormControl(this.limiteValue);
  metaControl = new FormControl(this.metaValue);
  constructor(formBuilder: FormBuilder) {
    Chart.register(AnnotationPlugin);
    this.headgeGroup = formBuilder.group({
      meta: this.metaControl,
      limite: this.limiteControl
    });
  }

  ngOnInit() {
    this.metaControl.valueChanges.subscribe(res => {
      this.barChartData.datasets[0].data[0] = this.metaControl.value;
      this.barChartOptions.plugins.annotation.annotations.box1.xMin = this.barChartData.datasets[0].data[0] - this.limiteControl.value;
      this.barChartOptions.plugins.annotation.annotations.box1.xMax = this.barChartData.datasets[0].data[0] + this.limiteControl.value;
      this.barChartType = 'line';
      setTimeout(() => this.barChartType = 'bar', 100);
      console.log(res);
    })
    this.limiteControl.valueChanges.subscribe(res => {
      this.barChartData.datasets[0].data[0] = this.metaControl.value;
      this.barChartOptions.plugins.annotation.annotations.box1.xMin = this.barChartData.datasets[0].data[0] - this.limiteControl.value;
      this.barChartOptions.plugins.annotation.annotations.box1.xMax = this.barChartData.datasets[0].data[0] + this.limiteControl.value;
      this.barChartType = 'line';
      setTimeout(() => this.barChartType = 'bar', 100);
      console.log(res);

    })
  }

  public barChartData: ChartData<'bar'> = {
    labels: [''],
    datasets: [
      {
        data: [this.metaControl.value],
        backgroundColor: [
          'rgb(70, 94, 255)'
        ],
        hoverBackgroundColor: [
          'rgb(126, 142, 255)'
        ],
        hoverBorderColor: [
          'rgb(251, 251, 251)'
        ],
      },
      {
        data: [this.atualValue, 0],
        backgroundColor: [
          'rgb(97, 212, 248)'
        ],
        hoverBackgroundColor: [
          'rgb(160, 229, 250)'
        ],
        hoverBorderColor: [
          'rgb(251, 251, 251)'
        ],
      }
    ],
  };

  public barChartOptions: any = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        min: 0,
      },
      y: {
      },
      xAxes: [{
        gridLines: {
          offsetGridLines: true
        }
      }]
    },
    plugins: {
      legend: {
        display: false,
      },
      autocolors: false,
      annotation: {
        annotations: {
          box1: {
            type: 'box',
            xMin: (this.metaControl.value - this.limiteControl.value),
            xMax: (this.metaControl.value + this.limiteControl.value),
            borderDash: [4, 4],
            borderColor: 'rgba(184, 46, 46, 1)',
            backgroundColor: 'rgba(255, 109, 102, 0.55)'
          }
        }
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            let label = tooltipItem.dataset.data[tooltipItem.dataIndex];
            return (` ${label} %`);
          }
        }
      }
    },
    indexAxis: 'y',
    barPercentage: 0.4,
  };

  public barChartType: ChartType = 'bar';

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
    this.barChartData.datasets[0].data[0] = this.metaControl.value;
  }
}
