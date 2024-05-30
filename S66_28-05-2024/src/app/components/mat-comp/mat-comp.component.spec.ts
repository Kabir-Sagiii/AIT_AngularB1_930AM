import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCompComponent } from './mat-comp.component';

describe('MatCompComponent', () => {
  let component: MatCompComponent;
  let fixture: ComponentFixture<MatCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatCompComponent]
    });
    fixture = TestBed.createComponent(MatCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
