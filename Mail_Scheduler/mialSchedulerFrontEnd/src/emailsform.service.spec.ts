import { TestBed } from '@angular/core/testing';

import { EmailsformService } from './emailsform.service';

describe('EmailsformService', () => {
  let service: EmailsformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailsformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
