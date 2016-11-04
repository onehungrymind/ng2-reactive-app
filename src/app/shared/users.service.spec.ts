/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Http } from '@angular/http';
import { Store } from '@ngrx/store';
import { UsersService } from './users.service';

class HttpStub {}
class StoreStub {
  select() {}
}

describe('Service: Users', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersService,
        {provide: Http, useClass: HttpStub},
        {provide: Store, useClass: StoreStub}
      ]
    });
  });

  it('should ...', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});
