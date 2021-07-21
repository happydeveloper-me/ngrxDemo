import { TestBed } from '@angular/core/testing';

import { KeyvalueService } from './keyvalue.service';

describe('KeyvalueService', () => {
  let service: KeyvalueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyvalueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
