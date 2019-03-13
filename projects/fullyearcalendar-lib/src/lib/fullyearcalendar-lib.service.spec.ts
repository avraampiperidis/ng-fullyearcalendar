import { TestBed } from '@angular/core/testing';

import { FullyearcalendarLibService } from './fullyearcalendar-lib.service';

describe('FullyearcalendarLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FullyearcalendarLibService = TestBed.get(FullyearcalendarLibService);
    expect(service).toBeTruthy();
  });
});
