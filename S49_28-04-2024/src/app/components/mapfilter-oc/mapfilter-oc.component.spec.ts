import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapfilterOCComponent } from './mapfilter-oc.component';

describe('MapfilterOCComponent', () => {
  let component: MapfilterOCComponent;
  let fixture: ComponentFixture<MapfilterOCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapfilterOCComponent]
    });
    fixture = TestBed.createComponent(MapfilterOCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
