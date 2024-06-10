import { TestBed } from '@angular/core/testing';

import { FotografiasService } from './fotografias.service';

describe('FotografiasService', () => {
  let service: FotografiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotografiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
