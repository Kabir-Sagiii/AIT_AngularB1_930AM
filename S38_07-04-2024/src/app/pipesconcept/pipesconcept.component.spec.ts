import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesconceptComponent } from './pipesconcept.component';

describe('PipesconceptComponent', () => {
  let component: PipesconceptComponent;
  let fixture: ComponentFixture<PipesconceptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipesconceptComponent]
    });
    fixture = TestBed.createComponent(PipesconceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
