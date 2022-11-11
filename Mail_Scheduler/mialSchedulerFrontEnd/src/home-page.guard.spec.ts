import { TestBed } from '@angular/core/testing';

import { HomePageGuard } from './home-page.guard';

describe('HomePageGuard', () => {
  let guard: HomePageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HomePageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
