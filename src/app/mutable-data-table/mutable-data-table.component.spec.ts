import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutableDataTableComponent } from './mutable-data-table.component';

describe('MutableDataTableComponent', () => {
  let component: MutableDataTableComponent;
  let fixture: ComponentFixture<MutableDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutableDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutableDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
