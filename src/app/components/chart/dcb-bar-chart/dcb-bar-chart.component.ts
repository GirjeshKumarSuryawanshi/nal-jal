import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dcb-bar-chart',
  templateUrl: './dcb-bar-chart.component.html',
  styleUrls: ['./dcb-bar-chart.component.css']
})
export class DcbBarChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  public barChartLabels:string[] = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;
   
    public barChartData:any[] = [
      {data: [65, 59, 80, 81, 56, 55, 40], label: 'Demand'},
      {data: [28, 48, 40, 19, 86, 27, 90], label: 'Collection'},
      {data: [28, 48, 40, 19, 86, 27, 90], label: 'Arrear'}
    ];
   
    //Scaling property
    public barChartOptions:any = {
      scaleShowVerticalLines: false,
      responsive: true
    };

    // events
    public chartClicked(e:any):void {
      console.log(e);
    }
   
    public chartHovered(e:any):void {
      console.log(e);
    }

}