import { TestBed } from '@angular/core/testing';

import { TabsCompService } from './tabs-comp.service';

describe('TabsCompService', () => {
  let service: TabsCompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabsCompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
