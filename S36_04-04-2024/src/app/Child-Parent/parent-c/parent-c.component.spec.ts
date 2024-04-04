import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCComponent } from './parent-c.component';

describe('ParentCComponent', () => {
  let component: ParentCComponent;
  let fixture: ComponentFixture<ParentCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentCComponent]
    });
    fixture = TestBed.createComponent(ParentCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
