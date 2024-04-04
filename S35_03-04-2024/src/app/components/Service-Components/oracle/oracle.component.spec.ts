import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OracleComponent } from './oracle.component';

describe('OracleComponent', () => {
  let component: OracleComponent;
  let fixture: ComponentFixture<OracleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OracleComponent]
    });
    fixture = TestBed.createComponent(OracleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
