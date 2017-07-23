import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreejsCubeSceneComponent } from './threejs-cube-scene.component';

describe('ThreejsCubeSceneComponent', () => {
  let component: ThreejsCubeSceneComponent;
  let fixture: ComponentFixture<ThreejsCubeSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreejsCubeSceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreejsCubeSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
