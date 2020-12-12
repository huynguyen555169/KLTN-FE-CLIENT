import { TestBed } from '@angular/core/testing';

import { CartRootService } from './cart-root.service';

describe('CartRootService', () => {
  let service: CartRootService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartRootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
