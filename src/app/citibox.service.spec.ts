import { TestBed, inject } from '@angular/core/testing';

import { CitiboxService } from './citibox.service';

describe('CitiboxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CitiboxService]
    });
  });

  it('should be created', inject([CitiboxService], (service: CitiboxService) => {
    expect(service).toBeTruthy();
  }));
});
