import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { MARKERS } from '../../utils/Constants'
import hashCode from '../../utils/hashCode';
import hasNull from '../../utils/hasNull';
import isValidCoordinate from '../../utils/isValidCoordinate';

@Component({
  selector: 'app-google-maps-marker-table',
  templateUrl: './google-maps-marker-table.component.html',
  styleUrls: ['./google-maps-marker-table.component.css']
})
export class GoogleMapsMarkerTableComponent implements OnInit {
  @Input() gmap: any;
  @Input() hideField: Array<any>;
  @Output() onMapUpdate: EventEmitter<any> = new EventEmitter<any>();

  private color: string;
  private lat: string;
  private lng: string;

  constructor() { }

  ngOnInit() { 
    if(!this.hideField) this.hideField = [];
    this.color = this.getRandomMarker();
    this.lat = "";
    this.lng = "";
  }

  ngOnChanges() { }

  markerRowElements(row){
    //clone row
    let clone_row = JSON.parse(JSON.stringify(row));

    for( let key in clone_row){
      if(this.hideField.includes(key)){
        delete clone_row[key];
      }
    }

    return Object.keys(clone_row).map( 
      (key) => {
        if(!this.hideField.includes(key)){
          let returnCell = clone_row[key];
          if(key=='color'){
            let imgSrc = MARKERS[clone_row[key]];
            returnCell = imgSrc;
          }
          return returnCell;
        }
    });
  }

  addMarker(new_marker){
   this.gmap = {
    markers: [new_marker].concat(this.gmap.markers),
    center: {lat:new_marker.lat, lng:new_marker.lng} 
    };

    this.onMapUpdate.emit(this.gmap);
  }

  deleteRow(rowId:string){
    const toDelete = new Set([rowId]);
    this.gmap.markers = this.gmap.markers.filter(row => !toDelete.has(row.id));
    this.onMapUpdate.emit(this.gmap);
  }

  recenter(new_lat, new_lng){
    this.gmap.center = {
      lat: new_lat,
      lng: new_lng
    }
    this.onMapUpdate.emit(this.gmap);
  }

  handleKeyPress(e){
    if (e.key == 'Enter') {
      e.preventDefault();
      this.handleSubmit();
    }
  }

  handleSubmit(){
    const hashString = this.color + this.lat + this.lng;
    
    const newMarker = {
      id: hashCode(hashString),
      color: this.color,
      lat: parseFloat(this.lat),
      lng: parseFloat(this.lng)
    };

    if(hasNull(newMarker) || !isValidCoordinate(this.lat, this.lng)) {
      console.log("invalid input");
    }else{
      this.addMarker(newMarker);
      this.reset();
    }

  }

  reset(){
    this.color = this.getRandomMarker()
    this.lat = "";
    this.lng = "";
  }

  getRandomMarker(){
    const rand = Math.floor(Math.random()*23);
    return Object.keys(MARKERS)[rand];
  }

}
