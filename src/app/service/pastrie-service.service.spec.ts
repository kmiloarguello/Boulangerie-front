import { TestBed } from '@angular/core/testing';

import { PastrieServiceService } from './pastrie-service.service';

describe('PastrieServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PastrieServiceService = TestBed.get(PastrieServiceService);
    expect(service).toBeTruthy();
  });
});
