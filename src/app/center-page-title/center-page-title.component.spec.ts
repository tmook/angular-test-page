import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterPageComponentComponent } from './center-page-component.component';

describe('CenterPageComponentComponent', () => {
  let component: CenterPageComponentComponent;
  let fixture: ComponentFixture<CenterPageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterPageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
