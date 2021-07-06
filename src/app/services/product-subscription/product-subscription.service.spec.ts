import { TestBed } from '@angular/core/testing';

import { ProductSubscriptionService } from './product-subscription.service';

describe('ProductSubscriptionService', () => {
  let service: ProductSubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
