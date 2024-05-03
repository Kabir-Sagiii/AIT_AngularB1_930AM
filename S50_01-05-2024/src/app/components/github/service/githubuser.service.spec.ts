import { TestBed } from '@angular/core/testing';

import { GithubuserService } from './githubuser.service';

describe('GithubuserService', () => {
  let service: GithubuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
