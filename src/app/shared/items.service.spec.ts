/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Http } from '@angular/http';
import { Store } from '@ngrx/store';
import { ItemsService } from './items.service';

class HttpStub {}
class StoreStub {
  select() {}
}

describe('Service: Items', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ItemsService,
        {provide: Http, useClass: HttpStub},
        {provide: Store, useClass: StoreStub}
      ]
    });
  });

  it('should ...', inject([ItemsService], (service: ItemsService) => {
    expect(service).toBeTruthy();
  }));
});
