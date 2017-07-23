import { Component, OnInit, Input } from '@angular/core';
declare var UnityLoader:any;

@Component({
  selector: 'app-unity-webgl',
  templateUrl: './unity-webgl.component.html',
  styleUrls: ['./unity-webgl.component.css']
})
export class UnityWebglComponent implements OnInit {
  @Input() sceneSource: string;
  gameInstance: any;

  constructor() { }
  ngOnInit() { }

  /* callback for successful load */
  load(response){
    //double check UnityLoader object is avaliable
    if(typeof(UnityLoader) === 'object'){
      //load game instance with settings and save to this.gameInstance variable
      this.gameInstance = UnityLoader.instantiate(
        "unityGameContainer", this.sceneSource
      );
    }else{
      console.log(
        'unity loader script loaded, but unable to find UnityLoader object'
      );
    }
  }

  error(response){
    console.log("unable to load unity loader script");
  }

  /* wait until component did mount to ensure 'gameContainer' ref is available */
  ngAfterContentInit(){
    //check if UnityLoader is already loaded, if not build and load UnityLoader script
    if( !(typeof(UnityLoader)==='object') ){
      //create script element
      const UnityLoader_script = document.createElement('script');

      //add script attributes
      UnityLoader_script.onload = (response) => (this.load(response));
      UnityLoader_script.onerror = (response) => (this.error(response));
      UnityLoader_script.src = "./assets/unity/UnityLoader.js";

      //load script directly on to DOM
      document.body.appendChild(UnityLoader_script);
    }
  }

  ngOnDestroy(){
    //remove UnityLoader event listeners
  }

}
