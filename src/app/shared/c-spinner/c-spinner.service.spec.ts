import { TestBed } from '@angular/core/testing';

import { CSpinnerService } from './c-spinner.service';

describe('CSpinnerService', () => {
  let service: CSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
