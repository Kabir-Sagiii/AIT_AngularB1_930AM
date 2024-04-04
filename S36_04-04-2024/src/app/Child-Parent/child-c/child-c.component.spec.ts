import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCComponent } from './child-c.component';

describe('ChildCComponent', () => {
  let component: ChildCComponent;
  let fixture: ComponentFixture<ChildCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildCComponent]
    });
    fixture = TestBed.createComponent(ChildCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
