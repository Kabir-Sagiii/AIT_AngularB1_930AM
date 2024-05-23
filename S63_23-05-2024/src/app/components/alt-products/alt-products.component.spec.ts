import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltProductsComponent } from './alt-products.component';

describe('AltProductsComponent', () => {
  let component: AltProductsComponent;
  let fixture: ComponentFixture<AltProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltProductsComponent]
    });
    fixture = TestBed.createComponent(AltProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
