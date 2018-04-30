import { Component, OnInit } from '@angular/core'
import { SelectItem } from 'primeng/primeng';
import { City } from './dashboard';
import { Tech } from '../apidata';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //technology list
  technology: Tech[];

  dashboardBC = "Revenue Vs. Missed Revenue";
  dasboardLC = "Revenue Trend";

  //chart declaration
  data: any;
  options: any;
  revenueTrenddata: any;

  //year filter declaration
  cities1: SelectItem[];
  selectedCity1: any;
  arr: any = [425, 169, 340, 681, 436, 355, 760, 500, 320, 220, 588, 245];
  barchartarr: any = [125, 219, 340, 181, 436, 355, 260, 500, 310, 220, 288, 145];
  linechartarr: any = [218, 328, 320, 139, 386, 127, 430, 260, 281, 246, 125, 420];

  //Date range declartion
  startDvalue: Date;
  endDvalue: Date;

  constructor(private CommonService: CommonService) {
    //SelectItem API with label-value pairs
    this.cities1 = [
      { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
      { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
      { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
      { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
      { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
    ];

    this.selectedCity1 = this.cities1[0].value;
    this.startDvalue = new Date();
    this.endDvalue = new Date();
  }

  ngOnInit() {
    this.getTechList();
    this.update();
    this.revenueTrend();
  }

  //get technology list
  // getTechList(): void {
  //   this.technology = this.CommonService.getTechList();
  // }
  getTechList(): void {
    this.CommonService.getTechList().subscribe((techlgy) => {
      this.technology = techlgy;
      console.log(this.technology,"--> sample data <--");
    });
  }

  changeDate(event) {
    if (event) {
      this.barchartarr = this.barchartarr.reverse();
      this.linechartarr = this.linechartarr.reverse();
      console.log(this.barchartarr);
      this.data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Missed Revenue',
            borderColor: '#19355B',
            borderWidth: 1,
            data: this.linechartarr,
            // Changes this dataset to become a line
            type: 'line'
          },
          {
            label: 'Revenue',
            backgroundColor: '#00A6A6',
            borderWidth: 1,
            data: this.barchartarr
          }
        ]
      }
    }
  }

  update() {
    this.data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Missed Revenue',
          // backgroundColor: '#9CCC65',
          borderColor: '#19355B',
          borderWidth: 1,
          data: [218, 328, 320, 139, 386, 127, 430, 260, 281, 246, 125, 420],
          // Changes this dataset to become a line
          type: 'line'
        },
        {
          label: 'Revenue',
          backgroundColor: '#00A6A6',
          borderWidth: 1,
          // borderColor: '#1E88E5',
          data: [125, 219, 340, 181, 436, 355, 260, 100, 310, 220, 288, 145]
        }
      ]
    }
    this.options = {
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Month'
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Revenue ($)'
          }
        }]
      },
      legend: {
        position: 'bottom'
      }
    };
  }

  selectData(event) {
    //event.dataset = Selected dataset
    //event.element = Selected element
    //event.element._datasetIndex = Index of the dataset in data
    //event.element._index = Index of the data in dataset
  }

  revenueTrend() {
    this.revenueTrenddata = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Revenue',
          borderColor: '#00A6A6',
          borderWidth: 1,
          data: [425, 169, 340, 681, 436, 355, 760, 500, 320, 220, 588, 245]
        }
      ]
    }
    this.options = {
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Month'
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Revenue ($)'
          }
        }]
      },
      legend: {
        position: 'bottom'
      }
    };
  }

  selectedTrendByYear(event) {
    if (event) {
      this.arr = this.arr.reverse();
      this.revenueTrenddata = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Revenue',
            borderColor: '#00A6A6',
            borderWidth: 1,
            data: this.arr
          }
        ]
      }
    }
  }
}
