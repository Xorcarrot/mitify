/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserDataService } from './userData.service';

describe('Service: UserData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDataService]
    });
  });

  it('should ...', inject([UserDataService], (service: UserDataService) => {
    expect(service).toBeTruthy();
  }));
});
