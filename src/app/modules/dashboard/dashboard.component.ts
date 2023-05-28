import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Options } from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsExportData from 'highcharts/modules/export-data';
import HighchartsAccessibility from 'highcharts/modules/accessibility';

HighchartsMore(Highcharts);
HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsAccessibility(Highcharts);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Options = {
    chart: {
      width: 400,
      height: 300,
    },
    title: {
      text: 'Spline Chart',
    },
    tooltip: {
      enabled: true,
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    plotOptions: {
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5,
          },
        },
        marker: {
          enabled: false,
        },
      },
    },
    series: [
      {
        type: 'spline',
        name: 'Series 1',
        data: [10, 20, 15, 25, 18, 30, 28, 35, 32, 40, 38, 45],
      },
      {
        type: 'spline',
        name: 'Series 2',
        data: [5, 15, 12, 22, 17, 25, 20, 30, 28, 35, 32, 40],
      },
    ],
    navigation: {
      menuItemStyle: {
        fontSize: '10px',
      },
    },
  };
}
