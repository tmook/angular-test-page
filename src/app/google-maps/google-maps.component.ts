import { Component, OnInit, OnChanges, AfterContentInit, OnDestroy, ViewChild, ElementRef, Input } from '@angular/core';
import * as env from 'environments/.env'
declare var google:any;

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit, AfterContentInit, OnDestroy {
  @ViewChild('mapContainer') private mapContainer: ElementRef;
  @Input() private map: any;
  @Input() private mapMarkers: Array<any>;
  @Input() private center: any;
  @Input() private zoom: number;

  constructor() { }

  ngOnInit() { 
    //default map center
    if(!this.center) { this.center = { lat: 21.299772, lng: -157.815886 }; }
    //default zoom level
    if(!this.zoom) { this.zoom = 8; }
  }

  /* callback for successful load */
  load(response){
    //double check google object is avaliable
    if(typeof(google) === 'object'){
      //load map with settings and save to this.map variable
      this.map = new google.maps.Map(
        this.mapContainer.nativeElement, 
        { 
          center: this.center,
          zoom: this.zoom
        }
      );
      this.loadMarkers(this.mapMarkers);
      this.showMarkers();
    }else{
      console.log(
        'google maps script loaded, but unable to find google.maps object'
      );
    }
  }

  error(response){
    console.log("unable to load google maps script");
  }

  /* wait until component did mount to ensure 'map' ref is available */
  ngAfterContentInit(){
    //check if google.maps is already loaded, if not build and load maps script
    if( !(typeof(google)==='object') || !(typeof(google.maps)==='object') ){
      //create script element
      const maps_googleapis_script = document.createElement('script');

      //add script attributes
      maps_googleapis_script.async = true;
      maps_googleapis_script.defer = true;
      maps_googleapis_script.onload = (response) => (this.load(response));
      maps_googleapis_script.onerror = (response) => (this.error(response));
      maps_googleapis_script.src = 
        "https://maps.googleapis.com/maps/api/js?key=" + 
        environment.GOOGLE_API_KEY;
      
      //load script directly on to DOM
      document.body.appendChild(maps_googleapis_script);
    }
  }

  ngOnDestroy(){
    //remove google.maps.event listeners
  }

  /* this should trigger when GoogleMaps state.center is updated */
  ngOnChanges() {
    if(prevProps.center !== this.props.center) {
      this.panToCenter(this.props.center);
    }
    if(prevProps.markers !== this.props.markers) {
      this.clearMarkers();
      this.loadMarkers(this.props.markers);
      this.showMarkers();
    }
  }

  panToCenter(newCenter){
    //recenter map over new center
    this.map.panTo(newCenter);
  }

  loadMarkers(markers){
    if(markers.length > 0 ){
      markers.forEach( marker => {
        const m = new google.maps.Marker({
          position: {lat:marker.lat, lng:marker.lng},
          map: this.map,
          icon: CONST.MARKERS[marker.color]
        });

        this.mapMarkers.push(m);
      });
    }
  }

  setMarkers(map){
    this.mapMarkers.forEach( marker => marker.setMap(map) );
  }

  showMarkers(){
    this.setMarkers(this.map);
  }

  clearMarkers(){
    this.setMarkers(null);
    this.mapMarkers = [];
  }

}
