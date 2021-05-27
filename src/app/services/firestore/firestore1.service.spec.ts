import { TestBed } from '@angular/core/testing';

import { Firestore1Service } from './firestore1.service';

describe('Firestore1Service', () => {
  let service: Firestore1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Firestore1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
