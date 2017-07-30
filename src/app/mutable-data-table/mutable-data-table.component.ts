import { Component, OnInit, OnChanges, Input } from '@angular/core';
import capitalize from '../utils/capitalize';
import hashCode from '../utils/hashCode';

@Component({
  selector: 'app-mutable-data-table',
  templateUrl: './mutable-data-table.component.html',
  styleUrls: ['./mutable-data-table.component.css']
})
export class MutableDataTableComponent implements OnInit {
  @Input() public data: Array<any>;
  @Input() private hideField: Array<any>;

  public isPlot: boolean;
  private tableCategories: Array<any>;
  private plot_data: Array<any>;
  private inputRefList: any;

  constructor() { 
    //initialize plot
    this.isPlot = false;
    this.inputRefList = {};
  }

  ngOnInit() {
    //remove catagries in hide array
    if(this.hideField){
      this.tableCategories = Object.keys(this.data[0]).filter(cat => !this.hideField.includes(cat));
    }else{
      this.tableCategories = Object.keys(this.data[0]);
    }
    /*
      //covert data to array
      this.data_array = this.data.map( 
        data_row => ( this.tableCategories.map( cat => data_row[cat])
        )
      );
   */
    //plot data
    this.updatePlotData();
  }

  updatePlotData(){
    //update plot data
    if(this.tableCategories){
      this.plot_data = this.data.map( 
        row => ( [row[this.tableCategories[0]], row[this.tableCategories[1]]])
      );
    }
  }

  toUpper(word:string){
    return capitalize(word);
  }

  deleteRow(rowId:string){
    const toDelete = new Set([rowId]);
    this.data = this.data.filter(row => !toDelete.has(row.id));

    this.updatePlotData();
  }

  handleKeyPress(e){
  console.log('Hi');
    if (e.key == 'Enter') {
      e.preventDefault()
      this.handleSubmit();
    }
  }

  handleSubmit(){
    //string of object to computer hash for id
    let hashString = '';
    //row object
    let rowObj = {};
    for(let cat in this.inputRefList){
      if(this.inputRefList.hasOwnProperty(cat)){
        hashString+=this.inputRefList[cat];
        rowObj[cat] = this.inputRefList[cat];
      }
    }

    //get hashcode and set to id field
    rowObj['id'] = hashCode(hashString);

    //lift change up to parent
    this.data = this.data.concat([rowObj]);

    //reset input fields
    this.reset();
    // update plot data
    this.updatePlotData();
  }

  reset(){
    for(let cat in this.inputRefList){
      if(this.inputRefList.hasOwnProperty(cat)){
        this.inputRefList[cat] = '';
      }
    }
  }

}
