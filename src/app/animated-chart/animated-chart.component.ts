import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-animated-chart',
  templateUrl: './animated-chart.component.html',
  styleUrls: ['./animated-chart.component.css']
})
export class AnimatedChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'bar',
      animation: true // Enable animation
    },
    title: {
      text: 'Animated Bar Chart'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    },
    series: [{
      type: 'bar',
      name: 'Jane',
      data: [1, 0, 4]
    }, {
      type: 'bar',
      name: 'John',
      data: [5, 7, 3]
    }],
    plotOptions: {
      series: {
        animation: {
          duration: 2000 // Set animation duration to 2 seconds
        }
      }
    }
  };
}
