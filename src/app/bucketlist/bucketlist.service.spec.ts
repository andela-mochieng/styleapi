/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { BucketlistService } from './bucketlist.service';

describe('Bucketlist Service', () => {
  beforeEachProviders(() => [BucketlistService]);

  it('should ...',
      inject([BucketlistService], (service: BucketlistService) => {
    expect(service).toBeTruthy();
  }));
});
