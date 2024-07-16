import { TestBed } from '@angular/core/testing';

import { HourlySlotsService } from './hourly-slots.service';

describe('HourlySlotsService', () => {
  let service: HourlySlotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HourlySlotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
