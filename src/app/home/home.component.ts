import { PiechartService,PieChart } from './../shared/piechart.service';
import { Component, OnInit } from '@angular/core';
import { NgxEchartsModule  } from 'ngx-echarts';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showloading:boolean = true;
  lineChart:PieChart;
  constructor(private pieChartService:PiechartService) { 

    this.pieChartService.getPieChart().subscribe(
      pieChart=> {
         this.lineChart = pieChart;
        // console.log(JSON.stringify(pieChart));
       
        // this.pieChart.legend = pieChart.legend;
        // this.pieChart.xAxis = pieChart.xAxis;
        // this.pieChart.series = pieChart.series;
        this.lineChart.title = {
          text: '堆叠分析图'
        };
        this.lineChart.tooltip = {
          trigger: 'axis',
                          axisPointer: {
                              type: 'cross',
                          label: {
                          backgroundColor: '#6a7985'
                                }
                    }
        };
        this.lineChart.toolbox = {
            feature: {
              saveAsImage: {}
            }
        };
        this.lineChart.grid = {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
        };
        this.lineChart.yAxis = [
          {
            type : 'value'
          }
        ];

        // console.log(JSON.stringify(this.lineChart));
      }
      
    );

    setTimeout(()=> {
      this.showloading = false;
    }, 3000);
  }

  ngOnInit() {
    
   
  }
}
