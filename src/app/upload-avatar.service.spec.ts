import { TestBed, inject } from '@angular/core/testing';

import { UploadAvatarService } from './upload-avatar.service';

describe('UploadAvatarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadAvatarService]
    });
  });

  it('should be created', inject([UploadAvatarService], (service: UploadAvatarService) => {
    expect(service).toBeTruthy();
  }));
});
