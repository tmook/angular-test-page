import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreejsCubeSceneAlternativeComponent } from './threejs-cube-scene-alternative.component';

describe('ThreejsCubeSceneAlternativeComponent', () => {
  let component: ThreejsCubeSceneAlternativeComponent;
  let fixture: ComponentFixture<ThreejsCubeSceneAlternativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreejsCubeSceneAlternativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreejsCubeSceneAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
