import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesCComponent } from './observables-c.component';

describe('ObservablesCComponent', () => {
  let component: ObservablesCComponent;
  let fixture: ComponentFixture<ObservablesCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservablesCComponent]
    });
    fixture = TestBed.createComponent(ObservablesCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
