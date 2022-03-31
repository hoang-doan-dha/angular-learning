import { TestBed } from '@angular/core/testing';

import { LessonThreeService } from './lesson-three.service';

describe('LessonThreeService', () => {
  let service: LessonThreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonThreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
