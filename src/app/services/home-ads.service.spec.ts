import { TestBed } from '@angular/core/testing';

import { HomeAdsService } from './home-ads.service';

describe('HomeAdsService', () => {
  let service: HomeAdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeAdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
