import { TestBed } from '@angular/core/testing';

import { EmailserverService } from './emailserver.service';

describe('EmailserverService', () => {
  let service: EmailserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
