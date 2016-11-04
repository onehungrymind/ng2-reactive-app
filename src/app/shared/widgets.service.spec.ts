/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { WidgetsService } from './widgets.service';

class StoreStub {
  select() {}
}

describe('Service: Widgets', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WidgetsService,
        {provide: Store, useClass: StoreStub}
      ]
    });
  });

  it('should ...', inject([WidgetsService], (service: WidgetsService) => {
    expect(service).toBeTruthy();
  }));
});
