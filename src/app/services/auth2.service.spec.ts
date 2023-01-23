/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Auth2Service } from './auth2.service';

describe('Service: Auth2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Auth2Service]
    });
  });

  it('should ...', inject([Auth2Service], (service: Auth2Service) => {
    expect(service).toBeTruthy();
  }));
});
