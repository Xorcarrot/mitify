/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DatasourceService } from './datasource.service';

describe('Service: Datasource', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatasourceService]
    });
  });

  it('should ...', inject([DatasourceService], (service: DatasourceService) => {
    expect(service).toBeTruthy();
  }));
});
