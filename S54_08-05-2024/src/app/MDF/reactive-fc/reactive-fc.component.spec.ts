import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFCComponent } from './reactive-fc.component';

describe('ReactiveFCComponent', () => {
  let component: ReactiveFCComponent;
  let fixture: ComponentFixture<ReactiveFCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFCComponent]
    });
    fixture = TestBed.createComponent(ReactiveFCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
