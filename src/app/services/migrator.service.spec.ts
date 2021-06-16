import { TestBed } from '@angular/core/testing';

import { MigratorService } from './migrator.service';

describe('MigratorService', () => {
  let service: MigratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MigratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
