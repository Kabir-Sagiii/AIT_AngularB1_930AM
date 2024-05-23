import { TestBed } from '@angular/core/testing';

import { ContactusSService } from './contactus-s.service';

describe('ContactusSService', () => {
  let service: ContactusSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactusSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
