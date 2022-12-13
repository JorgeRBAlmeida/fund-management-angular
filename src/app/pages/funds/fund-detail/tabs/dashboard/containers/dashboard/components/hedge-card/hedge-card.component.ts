import { Component, AfterViewInit, Input, ElementRef, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChartConfiguration, ChartData, ChartType, ChartEvent, Chart } from 'chart.js';
import { Hedge } from '../../../../../../../../../core/models/dashboard/hedge.model';
//import annotationPlugin from 'chartjs-plugin-annotation';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'fm-hedge-card',
  templateUrl: './hedge-card.component.html',
  styleUrls: ['./hedge-card.component.scss']
})
export class HedgeCardComponent {

   @Input() data!: Hedge;
  //forms
  form: any;
  //chart
  widthChart: number =  110;
  barChartLabels: string[] = ['Meta', 'Atual'];
  public barChartData!: ChartData<'bar'>;
  public barChartOptions: any;
  public barChartType: ChartType = 'bar';

 constructor(private ref: ChangeDetectorRef) {
  //Chart.register(annotationPlugin);
 }

 ngOnInit(): void {
  this.form = new FormGroup({
    targetControl: new FormControl(this.data.target),
    currentControl: new FormControl(this.data.current),
    limitControl: new FormControl(this.data.limit),
    requiredControl: new FormControl()
  });

  this.form.get('targetControl').valueChanges.subscribe((res: number) => {
    this.barChartData.datasets[0].data[0] = res;
    //this.barChartOptions.plugins.annotation.annotations.box1.xMin = Number(this.barChartData.datasets[0].data[0]) - this.form.get('limitControl')?.value!;
    //this.barChartOptions.plugins.annotation.annotations.box1.xMax = Number( this.barChartData.datasets[0].data[0]) + this.form.get('limitControl')?.value!;
    this.barChartType = 'line';
    setTimeout(() => this.barChartType = 'bar', 100);
  //  console.log(res);
  })
  this.form.get('limitControl').valueChanges.subscribe((res: number) => {
    this.barChartData.datasets[0].data[0] = this.form.get('targetControl').value;
    //this.barChartOptions.plugins.annotation.annotations.box1.xMin = Number(this.barChartData.datasets[0].data[0]) - this.form.get('limitControl')?.value!;
    //this.barChartOptions.plugins.annotation.annotations.box1.xMax = Number(this.barChartData.datasets[0].data[0]) + this.form.get('limitControl')?.value!;
    this.barChartType = 'line';
    setTimeout(() => this.barChartType = 'bar', 100);
  //  console.log(res);
    })
 }

  ngAfterViewInit(): void {
    this.barChartData = {
      labels: [''],
      datasets: [
        {
          data: [this.form.get('targetControl')?.value!],
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
          data: [this.form.get('currentControl')?.value!, 0],
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

    this.barChartOptions = {
      responsive: true,
      // We use these empty structures as placeholders for dynamic theming.
      scales: {
        x: {
          min: 0,
        },
        y: {
        },
      /*   xAxes: [{
          gridLines: {
            offsetGridLines: true
          }
        }] */
      },
      plugins: {
        legend: {
          display: false,
        },
        autocolors: false,
      /*   annotation: {
          annotations: {
            box1: {
              drawTime: 'afterDraw',
              type: 'box',
              xMin: (this.form.get('targetControl')?.value! - this.form.get('limitControl')?.value!),
              xMax: (this.form.get('targetControl')?.value! + this.form.get('limitControl')?.value!),
              borderDash: [4, 4],
              borderColor: 'rgba(194, 75, 70, 1)',
              backgroundColor: 'rgba(255, 109, 102, 0.55)'
            },
            line1: {
              drawTime: 'afterDraw',
              type: 'line',
              mode: 'vertical',
              scaleID: 'x-axis-0',
              value: this.form.get('metaControl')?.value,
              borderColor: 'rgba(194, 75, 70, 1)',
              borderWidth: 1,
              borderDash: [2, 2],
              label: {
                enabled: true,
                content: 'Limite',
                position: 'center',
                backgroundColor: 'rgba(0,0,0, 0.8)'
              }
            }
          }
        }, */
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
      barPercentage: 0.5,
    };
    this.ref.detectChanges();
  }
}
