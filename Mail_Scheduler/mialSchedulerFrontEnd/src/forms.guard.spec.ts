import { TestBed } from '@angular/core/testing';

import { FormsGuard } from './forms.guard';

describe('FormsGuard', () => {
  let guard: FormsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FormsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
