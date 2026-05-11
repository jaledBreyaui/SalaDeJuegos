import { TestBed } from '@angular/core/testing';

import { RaeApi } from './rae-api';

describe('RaeApi', () => {
  let service: RaeApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaeApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
