import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import Chart from 'chart.js/auto'


const entradas = [
  { year: 2010, count: 5422 },
  { year: 2011, count: 4000 },
  { year: 2012, count: 3542 },
  { year: 2013, count: 4512 },
  { year: 2014, count: 3221 },
  { year: 2015, count: 2145 },
  { year: 2016, count: 2459 },
];

const saidas = [
  { year: 2010, count: 1234 },
  { year: 2011, count: 2456 },
  { year: 2012, count: 3532 },
  { year: 2013, count: 5000 },
  { year: 2014, count: 3221 },
  { year: 2015, count: 4567 },
  { year: 2016, count: 2459 },
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {






  ngOnInit(): void {
    this.carregarCanvasBarra();
    this.carregarCanvasPizza();
  }

  @ViewChild("canvasBarra", { static: true }) canvasBarra: ElementRef | undefined
  carregarCanvasBarra() {
    new Chart(this.canvasBarra?.nativeElement, {
      type: 'bar',
      data: {
        labels: entradas.map(row => row.year),
        datasets: [
          {
            label: 'Entradas',
            data: entradas.map(row => row.count),
            backgroundColor: ['rgba(4, 177, 68)']

          },
          {
            label: 'Saídas',
            data: saidas.map(row => row.count),
            backgroundColor: ['rgba(220, 80, 40)']
          }
        ]
      },
      options: {
        responsive: true
      }
    })
  }



  @ViewChild("canvasPizza", { static: true }) canvasPizza: ElementRef | undefined
  carregarCanvasPizza() {
    new Chart(this.canvasPizza?.nativeElement, {
      type: 'line',
      data: {
        labels: entradas.map(row => row.year),
        datasets: [
          {
            label: 'Entradas',
            data: entradas.map(row => row.count),
            borderColor: ['rgba(4, 177, 68)']
          },
          {
            label: 'Saídas',
            data: saidas.map(row => row.count),
            borderColor: ['rgba(220, 80, 40)'],
          }
        ]
      },
      options: {
        responsive: true
      }
    })
  }


}