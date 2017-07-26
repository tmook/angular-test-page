import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;

  ANIMALS: Array<any>;
  MAPS: any;
  CITIES: Array<any>;

  animal_data: Array<any>;
  map_center: any;
  map_markers: Array<any>;
  city_data: Array<any>;

  constructor(){
    this.title = 'app';
    this.ANIMALS = [
      {id: "2104270841", animal: "Cat", age: "3", color: "Brown"},
      {id: "245082176", animal: "Dog", age: "2", color: "Orange"},
      {id: "-1846001306", animal: "Pig", age: "1", color: "White"}
    ];
    this.MAPS = {
      markers:[{
        id:1,
        color:"orange_dot",
        lat: 21.299772,
        lng: -157.815886
      }],
      center: {
        lat: 21.299772,
        lng: -157.815886
      }
    };
    this.CITIES = [
        { "population": 4.4, "city": "Seattle" },
        { "population": 2.1, "city": "Dallas" },
        { "population": 17.2, "city": "New York" },
        { "population": 3.8, "city": "Boston" },
        { "population": 10.5, "city": "Los Angeles" }
    ];
  }

  ngOnInit(){
    this.animal_data = this.ANIMALS;
    this.map_center = this.MAPS.center;
    this.map_markers = this.MAPS.markers;
    this.city_data = this.CITIES.map( (row) => ([row.city, row.population]));
  }


}
