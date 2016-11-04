/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HomeService } from './home.service';
import { UsersService, ItemsService, WidgetsService } from '../shared';

class UsersServiceStub {
  loadUsers() {}
}
class ItemsServiceStub {
  loadItems() {}
}
class WidgetsServiceStub {
  loadWidgets() {}
}

describe('Service: Home', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HomeService,
        {provide: UsersService, useClass: UsersServiceStub},
        {provide: ItemsService, useClass: ItemsServiceStub},
        {provide: WidgetsService, useClass: WidgetsServiceStub}
      ]
    });
  });

  it('should ...', inject([HomeService], (service: HomeService) => {
    expect(service).toBeTruthy();
  }));
});
