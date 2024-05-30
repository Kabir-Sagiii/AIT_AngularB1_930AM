import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCompsComponent } from './material-comps.component';

describe('MaterialCompsComponent', () => {
  let component: MaterialCompsComponent;
  let fixture: ComponentFixture<MaterialCompsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialCompsComponent]
    });
    fixture = TestBed.createComponent(MaterialCompsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
