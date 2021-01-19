import { TestBed } from '@angular/core/testing';

import { GroupsHttpService } from './groups-http.service';

describe('GroupsHttpService', () => {
  let service: GroupsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
