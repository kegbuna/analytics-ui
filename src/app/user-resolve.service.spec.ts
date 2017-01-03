/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserResolve } from './user-resolve.service';

describe('UserResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserResolve]
    });
  });

  it('should ...', inject([UserResolve], (service: UserResolve) => {
    expect(service).toBeTruthy();
  }));
});
