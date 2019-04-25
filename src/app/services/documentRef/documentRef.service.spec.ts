/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DocumentRefService } from './documentRef.service';

describe('Service: DocumentRef', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocumentRefService]
    });
  });

  it('should ...', inject([DocumentRefService], (service: DocumentRefService) => {
    expect(service).toBeTruthy();
  }));
});
