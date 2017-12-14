import { TestBed, inject } from '@angular/core/testing';

import { ShapeService } from './shape.service';

describe('ShapeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShapeService]
    });
  });

  it('should be created', inject([ShapeService], (service: ShapeService) => {
    expect(service).toBeTruthy();
  }));
});
