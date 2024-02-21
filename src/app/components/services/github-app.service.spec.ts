import { TestBed } from '@angular/core/testing';

import { GithubAppService } from './github-app.service';

describe('GithubAppService', () => {
  let service: GithubAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
