import { TestBed } from '@angular/core/testing';

import { MailschloginService } from './mailschlogin.service';

describe('MailschloginService', () => {
  let service: MailschloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailschloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
