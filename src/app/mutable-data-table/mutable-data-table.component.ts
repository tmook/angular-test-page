import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mutable-data-table',
  templateUrl: './mutable-data-table.component.html',
  styleUrls: ['./mutable-data-table.component.css']
})
export class MutableDataTableComponent implements OnInit {
  @Input() private data: Array<any>;
  @Input() private hideField: Array<any>;

  private tableCategories: Array<any>;
  private isPlot: boolean;

  constructor() { }

  ngOnInit() {
    this.isPlot = false;
    if(this.hideField){
      this.tableCategories = Object.keys(this.data[0]).filter(cat => !this.hideField.includes(cat));
    }else{
      this.tableCategories = Object.keys(this.data[0]);
    }
    console.log(this.tableCategories);
  }

}
