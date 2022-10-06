import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoGlobalComponent } from './geo-global.component';

describe('GeneGlobalComponent', () => {
  let component: GeoGlobalComponent;
  let fixture: ComponentFixture<GeoGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
