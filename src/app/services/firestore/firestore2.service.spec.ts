import { TestBed } from '@angular/core/testing';

import { Firestore2Service } from './firestore2.service';

describe('Firestore2Service', () => {
  let service: Firestore2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Firestore2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
