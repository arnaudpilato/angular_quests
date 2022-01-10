import { TestBed } from '@angular/core/testing';

import { Cocktail2Service } from './cocktail2.service';

describe('Cocktail2Service', () => {
  let service: Cocktail2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cocktail2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
