import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import * as THREE from 'THREE';

@Component({
  selector: 'app-threejs-cube-scene-alternative',
  templateUrl: './threejs-cube-scene-alternative.component.html',
  styleUrls: ['./threejs-cube-scene-alternative.component.css']
})
export class ThreejsCubeSceneAlternativeComponent implements OnInit {
  @ViewChild('threejsSceneContainer') sceneContainer: ElementRef;
  sceneWidth: number = 555;
  sceneHeight: number = 278;

  constructor() { }

  ngOnInit() { 
    this.createScene();
  }

  createScene(){
    const sceneWidth = this.sceneWidth
    const sceneHeight = this.sceneHeight
    
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 
      75, 
      sceneWidth/sceneHeight, 
      0.1, 
      1000 
    );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( sceneWidth, sceneHeight );
    this.sceneContainer.nativeElement.replaceWith(renderer.domElement);

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame( animate );

      cube.rotation.x += 0.1;
      cube.rotation.y += 0.1;

      renderer.render(scene, camera);
    };

    animate();
  }

}

