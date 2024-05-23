import { TestBed } from '@angular/core/testing';

import { RegisteredusersService } from './registeredusers.service';

describe('RegisteredusersService', () => {
  let service: RegisteredusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisteredusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
