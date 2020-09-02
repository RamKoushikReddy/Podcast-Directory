import { TestBed } from '@angular/core/testing';

import { PodcastDirectoryService } from './podcast-directory.service';

describe('PodcastDirectoryService', () => {
  let service: PodcastDirectoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PodcastDirectoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
