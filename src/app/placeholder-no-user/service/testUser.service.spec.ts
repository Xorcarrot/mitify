/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestUserService } from './testUser.service';

describe('Service: TestUser', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestUserService],
    });
  });

  it('should ...', inject([TestUserService], (service: TestUserService) => {
    expect(service).toBeTruthy();
  }));
});
