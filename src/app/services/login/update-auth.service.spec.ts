import { TestBed } from '@angular/core/testing';

import { UpdateAuthService } from './update-auth.service';

describe('UpdateAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateAuthService = TestBed.get(UpdateAuthService);
    expect(service).toBeTruthy();
  });
});
