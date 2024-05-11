import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivepracComponent } from './reactiveprac.component';

describe('ReactivepracComponent', () => {
  let component: ReactivepracComponent;
  let fixture: ComponentFixture<ReactivepracComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactivepracComponent]
    });
    fixture = TestBed.createComponent(ReactivepracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
