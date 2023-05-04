import { TestBed } from '@angular/core/testing';

import { UserGuardsGuard } from './user-guards.guard';

describe('UserGuardsGuard', () => {
  let guard: UserGuardsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserGuardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
