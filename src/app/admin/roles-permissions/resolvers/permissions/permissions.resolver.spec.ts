import { TestBed } from '@angular/core/testing';

import { PermissionsResolver } from './permissions.resolver';

describe('PermissionsResolver', () => {
  let resolver: PermissionsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PermissionsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
