import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import * as Highcharts from 'highcharts';
import * as drilldown from 'highcharts/modules/drilldown.src.js';
drilldown(Highcharts);


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  /* tree start*/
  public tree = {
    "data":
      [
        {
          "label": "Option 1",
          "data": "Documents Folder",
          "expandedIcon": "fa-folder-open",
          "collapsedIcon": "fa-folder",
          "children": [{
            "label": "Option 1.1",
            "data": "Work Folder",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "children": [{ "label": "Option 1.1.1", "icon": "fa-file-word-o", "data": "Expenses Document" }, { "label": "Option 1.1.2", "icon": "fa-file-word-o", "data": "Resume Document" }]
          },
          {
            "label": "Option 1.2",
            "data": "Home Folder",
            "expandedIcon": "fa-folder-open",
            "collapsedIcon": "fa-folder",
            "children": [{ "label": "Option 1.2.1", "icon": "fa-file-word-o", "data": "Invoices for this month" }]
          }]
        },
        {
          "label": "Option 2",
          "data": "Pictures Folder",
          "expandedIcon": "fa-folder-open",
          "collapsedIcon": "fa-folder",
          "children": [
            { "label": "Option 2.1", "icon": "fa-file-image-o", "data": "Barcelona Photo" },
            { "label": "Option 2.2", "icon": "fa-file-image-o", "data": "PrimeFaces Logo" },
            { "label": "Option 2.3", "icon": "fa-file-image-o", "data": "PrimeUI Logo" }]
        }
      ]
  }

  /**tree end */
  optionsModel: number[];

  mySettings: IMultiSelectSettings = {
    enableSearch: false,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default',
    dynamicTitleMaxItems: 2,
    displayAllSelectedText: false
  };

  myTexts: IMultiSelectTexts = {
    checkAll: 'Select all',
    uncheckAll: 'Unselect all',
    checked: 'item selected',
    checkedPlural: 'items selected',
    searchPlaceholder: 'Find',
    searchEmptyResult: 'Nothing found...',
    searchNoRenderText: 'Type in search box to see results...',
    defaultTitle: 'Select',
    allSelected: 'All selected',
  };

  myOptions: IMultiSelectOption[];

  options: any;
  revenueTrenddata: any;

  constructor() {

  }

  ngOnInit() {
    this.myOptions = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 1.1', parentId: 1 },
      { id: 3, name: 'Option 1.2', parentId: 1 },
      { id: 4, name: 'Option 1.3', parentId: 1 },
      { id: 5, name: 'Option 2' },
      { id: 6, name: 'Option 2.1', parentId: 5 },
      { id: 7, name: 'Option 2.2', parentId: 5 },
      { id: 8, name: 'Option 2.3', parentId: 5 },
      { id: 9, name: 'Option 3' },
      { id: 10, name: 'Option 3.1', parentId: 9 },
      { id: 11, name: 'Option 3.2', parentId: 9 },
    ];
    //this.revenueTrend();
    this.revenueHighChart();
  }
  revenueHighChart() {
    // Create the chart
    Highcharts.chart('container', {
      chart: {
        type: 'column'
      },
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'Revenue ($)'
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
          }
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },
      series: [{
        name: 'Revenue',
        colorByPoint: true,
        data: [
          {
            name: 'Jan',
            y: 5,
            drilldown: 'Jan'
          },
          {
            name: 'Feb',
            y: 23.2,
            drilldown: 'Feb'
          },
          {
            name: 'Mar',
            y: 45.2,
            drilldown: 'Mar'
          },
          {
            name: 'Apr',
            y: 47.2,
            drilldown: 'Apr'
          },
          {
            name: 'May',
            y: 5.2,
            drilldown: 'May'
          },
          {
            name: 'Jun',
            y: 37.25,
            drilldown: 'Jun'
          },
          {
            name: 'Jul',
            y: 49.5,
            drilldown: 'Jul'
          },
          {
            name: 'Aug',
            y: 12.5,
            drilldown: 'Aug'
          },
          {
            name: 'Sep',
            y: 61.5,
            drilldown: 'Sep'
          },
          {
            name: 'Oct',
            y: 12.5,
            drilldown: 'Oct'
          },
          {
            name: 'Nov',
            y: 10.5,
            drilldown: 'Nov'
          },
          {
            name: 'Dec',
            y: 43.5,
            drilldown: 'Dec'
          }
        ]
      }],
      drilldown: {
        series: [{
          id: 'Jan',
          name: 'Jan',
          data: [{
            name: 'Week1',
            y: 4,
            drilldown: 'day7'
          },
          {
            name: 'Week2',
            y: 2,
            drilldown: 'day7'
          },
          {
            name: 'Week3',
            y: 12,
            drilldown: 'day7'
          },
          {
            name: 'Week4',
            y: 21,
            drilldown: 'day7'
          },
          {
            name: 'Week5',
            y: 6,
            drilldown: 'day7'
          }
          ]
        },
        {
          id: 'Feb',
          name: 'Feb',
          data: [{
            name: 'Week1',
            y: 4,
            drilldown: 'day7'
          },
          {
            name: 'Week2',
            y: 5,
            drilldown: 'day7'
          },
          {
            name: 'Week3',
            y: 3,
            drilldown: 'day7'
          },
          {
            name: 'Week4',
            y: 9,
            drilldown: 'day7'
          }
          ]
        },
        {
          id: 'Mar',
          name: 'Mar',
          data: [{
            name: 'Week1',
            y: 6,
            drilldown: 'day7'
          },
          {
            name: 'Week2',
            y: 4,
            drilldown: 'day7'
          },
          {
            name: 'Week3',
            y: 6,
            drilldown: 'day7'
          },
          {
            name: 'Week4',
            y: 9,
            drilldown: 'day7'
          },
          {
            name: 'Week5',
            y: 2,
            drilldown: 'day7'
          }
          ]
        },
        {
          id: 'Apr',
          name: 'Apr',
          data: [{
            name: 'Week1',
            y: 6,
            drilldown: 'day7'
          },
          {
            name: 'Week2',
            y: 7,
            drilldown: 'day7'
          },
          {
            name: 'Week3',
            y: 2,
            drilldown: 'day7'
          },
          {
            name: 'Week4',
            y: 3,
            drilldown: 'day7'
          }         
          ]
        },
        {
          id: 'May',
          name: 'May',
          data: [{
            name: 'Week1',
            y: 6,
            drilldown: 'day7'
          },
          {
            name: 'Week2',
            y: 5,
            drilldown: 'day7'
          },
          {
            name: 'Week3',
            y: 4,
            drilldown: 'day7'
          },
          {
            name: 'Week4',
            y: 9,
            drilldown: 'day7'
          },
          {
            name: 'Week5',
            y: 8,
            drilldown: 'day7'
          }
          ]
        },
        {
          id: 'Jun',
          name: 'Jun',
          data: [{
            name: 'Week1',
            y: 6,
            drilldown: 'day7'
          },
          {
            name: 'Week2',
            y: 3,
            drilldown: 'day7'
          },
          {
            name: 'Week3',
            y: 9,
            drilldown: 'day7'
          },
          {
            name: 'Week4',
            y: 4,
            drilldown: 'day7'
          },
          {
            name: 'Week5',
            y: 8,
            drilldown: 'day7'
          }
          ]
        },
        {
          id: 'Jul',
          name: 'Jul',
          data: [{
            name: 'Week1',
            y: 6,
            drilldown: 'day7'
          },
          {
            name: 'Week2',
            y: 5,
            drilldown: 'day7'
          },
          {
            name: 'Week3',
            y: 8,
            drilldown: 'day7'
          },
          {
            name: 'Week4',
            y: 9,
            drilldown: 'day7'
          },
          {
            name: 'Week5',
            y: 6,
            drilldown: 'day7'
          }
          ]
        },
        {
          id: 'Aug',
          name: 'Aug',
          data: [{
            name: 'Week1',
            y: 6,
            drilldown: 'day7'
          },
          {
            name: 'Week2',
            y: 5,
            drilldown: 'day7'
          },
          {
            name: 'Week3',
            y: 9,
            drilldown: 'day7'
          },
          {
            name: 'Week4',
            y: 2,
            drilldown: 'day7'
          }
          ]
        },
        {
          id: 'Sep',
          name: 'Sep',
          data: [{
            name: 'Week1',
            y: 6,
            drilldown: 'day7'
          },
          {
            name: 'Week2',
            y: 2,
            drilldown: 'day7'
          },
          {
            name: 'Week3',
            y: 8,
            drilldown: 'day7'
          },
          {
            name: 'Week4',
            y: 5,
            drilldown: 'day7'
          },
          {
            name: 'Week5',
            y: 4,
            drilldown: 'day7'
          }         
          ]
        },
        {
          id: 'Oct',
          name: 'Oct',
          data: [{
            name: 'Week1',
            y: 6,
            drilldown: 'day7'
          },
          {
            name: 'Week2',
            y: 15,
            drilldown: 'day7'
          },
          {
            name: 'Week3',
            y: 12,
            drilldown: 'day7'
          },
          {
            name: 'Week4',
            y: 9,
            drilldown: 'day7'
          }
          ]
        },
        {
          id: 'Nov',
          name: 'Nov',
          data: [{
            name: 'Week1',
            y: 16,
            drilldown: 'day7'
          },
          {
            name: 'Week2',
            y: 15,
            drilldown: 'day7'
          },
          {
            name: 'Week3',
            y: 4,
            drilldown: 'day7'
          },
          {
            name: 'Week4',
            y: 9,
            drilldown: 'day7'
          },
          {
            name: 'Week5',
            y: 6,
            drilldown: 'day7'
          }         
          ]
        },
        {
          id: 'Dec',
          name: 'Dec',
          data: [{
            name: 'Week1',
            y: 5,
            drilldown: 'day7'
          },
          {
            name: 'Week2',
            y: 10,
            drilldown: 'day7'
          },
          {
            name: 'Week3',
            y: 4,
            drilldown: 'day7'
          },
          {
            name: 'Week4',
            y: 5,
            drilldown: 'day7'
          },
          {
            name: 'Week5',
            y: 3,
            drilldown: 'day7'
          }
          ]
        },
        {
          id: 'day7',
          data: [["Day1",
            60.1],
          ["Day2",
            40.1],
          ["Day3",
            15.1],
          ["Day4",
            34.1],
          ["Day5",
            85.1],
          ["Day6",
            34.1],         
          ["Day7",
            34.9]]
        },
        {
          id: 'day0',
          data: [
            ["Day0",
              10.1],
            ["Day1",
              10.1]
          ]
        }
        ]
      }
    });
  }

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.myOptions);
  }

  revenueTrend() {
    this.revenueTrenddata = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Revenue',
          borderColor: '#800027',
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

}
