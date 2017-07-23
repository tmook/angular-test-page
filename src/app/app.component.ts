import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  CITIES: Array<any>;
  city_data: Array<any>;

  constructor(){
    this.title = 'app';
    this.CITIES = [
        { "population": 4.4, "city": "Seattle" },
        { "population": 2.1, "city": "Dallas" },
        { "population": 17.2, "city": "New York" },
        { "population": 3.8, "city": "Boston" },
        { "population": 10.5, "city": "Los Angeles" }
    ]
  };

  ngOnInit(){
    this.city_data = this.CITIES.map( (row) => ([row.city, row.population]));
  };


}
