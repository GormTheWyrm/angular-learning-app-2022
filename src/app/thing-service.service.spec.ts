import { TestBed } from '@angular/core/testing';

import { ThingServiceService } from './thing-service.service';

describe('ThingServiceService', () => {
  let service: ThingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
