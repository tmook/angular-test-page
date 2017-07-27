import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CenterPageTitleComponent } from './center-page-title/center-page-title.component';
import { MutableDataTableComponent } from './mutable-data-table/mutable-data-table.component';
import { D3BarChartComponent } from './D3/d3-bar-chart/d3-bar-chart.component';
import { GoogleMapsComponent } from './GoogleMaps/google-maps/google-maps.component';
import { ThreejsCubeSceneComponent } from './ThreeJS/threejs-cube-scene/threejs-cube-scene.component';
import { ThreejsCubeSceneAlternativeComponent } from './ThreeJS/threejs-cube-scene-alternative/threejs-cube-scene-alternative.component';
import { UnityWebglComponent } from './unity-webgl/unity-webgl.component';
import { GoogleMapsMarkerTableComponent } from './GoogleMaps/google-maps-marker-table/google-maps-marker-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CenterPageTitleComponent,
    MutableDataTableComponent,
    D3BarChartComponent,
    GoogleMapsComponent,
    ThreejsCubeSceneComponent,
    UnityWebglComponent,
    ThreejsCubeSceneAlternativeComponent,
    GoogleMapsMarkerTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
