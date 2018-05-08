import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption, IMultiSelectSettings, IMultiSelectTexts } from 'angular-2-dropdown-multiselect';

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
    this.revenueTrend();
  }
  onItemSelect(item:any) {
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
