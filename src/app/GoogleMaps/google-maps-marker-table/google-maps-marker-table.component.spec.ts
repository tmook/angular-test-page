import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapsMarkerTableComponent } from './google-maps-marker-table.component';

describe('GoogleMapsMarkerTableComponent', () => {
  let component: GoogleMapsMarkerTableComponent;
  let fixture: ComponentFixture<GoogleMapsMarkerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMapsMarkerTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapsMarkerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
