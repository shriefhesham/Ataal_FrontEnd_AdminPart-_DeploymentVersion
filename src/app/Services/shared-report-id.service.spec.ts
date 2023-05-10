import { TestBed } from '@angular/core/testing';

import { SharedReportIDService } from './shared-report-id.service';

describe('SharedReportIDService', () => {
  let service: SharedReportIDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedReportIDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
