import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';
import * as Highcharts from 'highcharts';
import * as drilldown from 'highcharts/modules/drilldown.src.js'
drilldown(Highcharts)

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
      "series": [
        {
          "name": "Revenue",
          "colorByPoint": true,
          "data": [
            {
              "name": "Jan",
              "y": 62.74,
              "drilldown": "Jan"
            },
            {
              "name": "Feb",
              "y": 10.57,
              "drilldown": "Feb"
            },
            {
              "name": "Mar",
              "y": 37.23,
              "drilldown": "Mar"
            },
            {
              "name": "Apr",
              "y": 15.58,
              "drilldown": "Apr"
            },
            {
              "name": "May",
              "y": 4.02,
              "drilldown": "May"
            },
            {
              "name": "Jun",
              "y": 41.92,
              "drilldown": "Jun"
            },
            {
              "name": "Jul",
              "y": 11.92,
              "drilldown": "Jul"
            },
            {
              "name": "Aug",
              "y": 1.92,
              "drilldown": "Aug"
            },
            {
              "name": "Sep",
              "y": 1.92,
              "drilldown": "Sep"
            },
            {
              "name": "Oct",
              "y": 1.92,
              "drilldown": "Oct"
            },
            {
              "name": "Nov",
              "y": 16.92,
              "drilldown": "Nov"
            },
            {
              "name": "Dec",
              "y": 1.92,
              "drilldown": "Dec"
            }
            // {
            //   "name": "Other",
            //   "y": 7.62,
            //   "drilldown": null
            // }
          ]
        }
      ],
      "drilldown": {
        "series": [
          {
            "name": "Jan",
            "id": "Jan",
            "data": [
              [
                "Week 1",
                10.1
              ],
              [
                "Week 2",
                21.3
              ],
              [
                "Week 3",
                53.02
              ],
              [
                "Week 4",
                1.4
              ],
              [
                "Week 5",
                0.88
              ]
            ]
          },
          {
            "name": "Feb",
            "id": "Feb",
            "data": [
              [
                "Week 1",
                1.02
              ],
              [
                "Week 2",
                7.36
              ],
              [
                "Week 3",
                30.35
              ],
              [
                "Week 4",
                0.11
              ],
              [
                "Week 5",
                10.1
              ]
            ]
          },
          {
            "name": "Mar",
            "id": "Mar",
            "data": [
              [
                "Week 1",
                6.2
              ],
              [
                "Week 2",
                10.29
              ],
              [
                "Week 3",
                0.27
              ],
              [
                "Week 4",
                0.47
              ],
              [
                "Week 5",
                14.25
              ]
            ]
          },
          {
            "name": "Apr",
            "id": "Apr",
            "data": [
              [
                "Week 1",
                3.39
              ],
              [
                "Week 2",
                0.96
              ],
              [
                "Week 3",
                0.36
              ],
              [
                "Week 4",
                0.54
              ],
              [
                "Week 5",
                0.13
              ]
            ]
          },
          {
            "name": "May",
            "id": "May",
            "data": [
              [
                "Week 1",
                2.6
              ],
              [
                "Week 2",
                30.92
              ],
              [
                "Week 3",
                43.4
              ],
              [
                "week 4",
                40.1
              ],
              [
                "week 5",
                10.1
              ]
            ]
          },
          {
            "name": "Jun",
            "id": "Jun",
            "data": [
              [
                "Week 1",
                0.96
              ],
              [
                "Week 2",
                20.82
              ],
              [
                "Week 3",
                10.14
              ],
              [
                "Week 4",
                0.82
              ],
              [
                "Week 5",
                45.14
              ]
            ]
          },
          {
            "name": "Jul",
            "id": "Jul",
            "data": [
              [
                "Week 1",
                0.91
              ],
              [
                "Week 2",
                30.82
              ],
              [
                "Week 3",
                60.35
              ],
              [
                "Week 4",
                10.82
              ],
              [
                "Week 5",
                0.35
              ]
            ]
          },
          {
            "name": "Aug",
            "id": "Aug",
            "data": [
              [
                "Week 1",
                33.91
              ],
              [
                "Week 2",
                15.82
              ],
              [
                "Week 3",
                0.35
              ],
              [
                "Week 4",
                30.82
              ],
              [
                "vWeek 5",
                40.35
              ]
            ]
          },
          {
            "name": "Sep",
            "id": "Sep",
            "data": [
              [
                "Week 1",
                0.91
              ],
              [
                "Week 2",
                23.82
              ],
              [
                "Week 3",
                34.35
              ],
              [
                "Week 4",
                40.91
              ],
              [
                "Week 5",
                0.82
              ],
              [
                "Week 6",
                10.35
              ]
            ]
          },
          {
            "name": "Oct",
            "id": "Oct",
            "data": [
              [
                "Week 1",
                0.91
              ],
              [
                "Week 2",
                13.82
              ],
              [
                "Week 3",
                20.35
              ],
              [
                "Week 4",
                10.82
              ],
              [
                "Week 5",
                0.35
              ]
            ]
          },
          {
            "name": "Nov",
            "id": "Nov",
            "data": [
              [
                "Week 1",
                0.91
              ],
              [
                "Week 2",
                0.82
              ],
              [
                "Week 3",
                0.35
              ],
              [
                "Week 4",
                11.22
              ],
              [
                "Week 5",
                32.90
              ]
            ]
          },
          {
            "name": "Dec",
            "id": "Dec",
            "data": [
              [
                "Week 1",
                0.91
              ],
              [
                "week 2",
                0.82
              ],
              [
                "Week 3",
                0.35
              ],
              [
                "Week 3",
                0.91
              ],
              [
                "Week 4",
                0.82
              ],
              [
                "Week 5",
                0.35
              ],
              [
                "Week 6",
                78.45
              ]
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
