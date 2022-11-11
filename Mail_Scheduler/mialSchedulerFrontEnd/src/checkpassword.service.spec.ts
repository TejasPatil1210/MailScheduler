import { TestBed } from '@angular/core/testing';

import { CheckpasswordService } from './checkpassword.service';

describe('CheckpasswordService', () => {
  let service: CheckpasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckpasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
