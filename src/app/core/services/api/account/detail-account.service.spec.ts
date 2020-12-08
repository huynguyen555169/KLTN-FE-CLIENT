import { TestBed } from '@angular/core/testing';

import { DetailAccountService } from './detail-account.service';

describe('DetailAccountService', () => {
  let service: DetailAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
